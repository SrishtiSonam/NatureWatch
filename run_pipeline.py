import argparse
from src.config.logging_config import setup_logging
from src.config.model_config import ModelNameConfig, MODEL_CONFIGS
from src.data.data_loader import ingest_data, clean_data
from src.train import train_model
from src.evaluation import MSE, R2Score, RMSE
from src.utils import check_data, save_model
import json
import os


logger = setup_logging()


def save_metrics_to_file(results, file_path="model_metrics.txt"):
    """
    Save model metrics to a text file as a dictionary.

    Args:
        results: List of dictionaries containing model results
        file_path: Path to the text file where metrics will be stored
    """
    try:
        metrics_dict = {}

        # Process each result
        for result in results:
            model_name = result["model_name"]
            metrics_dict[model_name] = result["metrics"]

        if os.path.exists(file_path):
            try:
                with open(file_path, "r") as file:
                    existing_metrics = json.loads(file.read())
                # Update with new metrics
                existing_metrics.update(metrics_dict)
                metrics_dict = existing_metrics
            except json.JSONDecodeError:
                logger.warning(f"Existing metrics file was not valid JSON. Creating new file.")

        # Write metrics to file
        with open(file_path, "w") as file:
            file.write(json.dumps(metrics_dict, indent=4))

        logger.info(f"Model metrics saved successfully to {file_path}")

    except Exception as e:
        logger.error(f"Error saving metrics to file: {str(e)}")
        logger.exception("Traceback:")


def model_evaluation(model_name, fine_tuning):
    try:
        # Load and preprocess data
        logger.info("Loading and preprocessing data...")
        raw_data = ingest_data("datasets/main_dataset.csv")

        # Print raw data info
        logger.info(f"Raw data shape: {raw_data.shape}")
        logger.info(f"Raw data columns: {raw_data.columns.tolist()}")
        logger.info(f"Raw data types:\n{raw_data.dtypes}")

        x_train, x_test, y_train, y_test = clean_data(raw_data)

        # Check data for issues
        check_data(x_train, y_train, "training")
        check_data(x_test, y_test, "testing")

        # Set up model configuration
        logger.info(f"Setting up {model_name} model with fine_tuning={fine_tuning}")
        model_config = ModelNameConfig(model_name=model_name, fine_tuning=fine_tuning)

        # Log the hyperparameters being used from MODEL_CONFIGS
        if model_name in MODEL_CONFIGS:
            logger.info(f"Using predefined hyperparameters for {model_name}: {MODEL_CONFIGS[model_name]}")
        else:
            logger.warning(f"No predefined hyperparameters found for {model_name}")

        # Train the model
        logger.info("Training the model...")
        trained_model = train_model(x_train, x_test, y_train, y_test, model_config)

        # Save the model
        save_model(trained_model, model_name)

        # Evaluate the model
        logger.info("Evaluating the model...")
        y_pred = trained_model.predict(x_test)
        mse = MSE().calculate_score(y_test, y_pred)
        r2 = R2Score().calculate_score(y_test, y_pred)
        rmse = RMSE().calculate_score(y_test, y_pred)

        logger.info(f"Model evaluation results:")
        logger.info(f"MSE: {mse:.4f}")
        logger.info(f"R2 Score: {r2:.4f}")
        logger.info(f"RMSE: {rmse:.4f}")

        logger.info("Model training and evaluation completed successfully.")

        return {
            "model_name": model_name,
            "fine_tuning": fine_tuning,
            "metrics": {
                "mse": mse,
                "r2": r2,
                "rmse": rmse
            }
        }

    except Exception as e:
        logger.error(f"Error in model evaluation for {model_name}: {str(e)}")
        logger.exception("Traceback:")
        return None


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Train a landslide prediction model")
    parser.add_argument("--model", type=str, default="all",
                        choices=["all", "randomforest", "xgboost", "lightgbm", "linear_regression"],
                        help="Model to train (use 'all' to train all models)")
    parser.add_argument("--fine-tune", action="store_true",
                        help="Enable hyperparameter fine-tuning (default: use predefined hyperparameters)")
    parser.add_argument("--output", type=str, default="model_metrics.txt",
                        help="Path to save model metrics")
    args = parser.parse_args()

    # List of all available models
    all_models = ["randomforest", "xgboost", "lightgbm", "linear_regression"]

    # Use fine-tuning only if explicitly specified
    fine_tuning = args.fine_tune

    # Log whether we're using fine-tuning or predefined hyperparameters
    if fine_tuning:
        logger.info("Fine-tuning mode: Will perform hyperparameter optimization")
    else:
        logger.info("Using predefined hyperparameters from MODEL_CONFIGS")

    if args.model == "all":
        logger.info(f"Training and evaluating all models with fine_tuning={fine_tuning}")
        results = []

        for model_name in all_models:
            logger.info(f"Starting evaluation for model: {model_name}")
            result = model_evaluation(model_name, fine_tuning)
            if result:
                results.append(result)

        # Save metrics to file
        if results:
            save_metrics_to_file(results, args.output)

        # Compare all model results
        if results:
            logger.info("========== Model Comparison ==========")
            for result in results:
                model = result["model_name"]
                fine_tuning_status = "with fine-tuning" if result["fine_tuning"] else "with predefined parameters"
                metrics = result["metrics"]
                logger.info(f"{model} ({fine_tuning_status}):")
                logger.info(f"  MSE: {metrics['mse']:.4f}")
                logger.info(f"  R2: {metrics['r2']:.4f}")
                logger.info(f"  RMSE: {metrics['rmse']:.4f}")

            # best_model = min(results, key=lambda x: x["metrics"]["rmse"])
            # logger.info(f"\nBest model based on RMSE: {best_model['model_name']} with RMSE: {best_model['metrics']['rmse']:.4f}")

            # best_r2_model = max(results, key=lambda x: x["metrics"]["r2"])
            # logger.info(f"Best model based on R2: {best_r2_model['model_name']} with R2: {best_r2_model['metrics']['r2']:.4f}")
    else:
        result = model_evaluation(args.model, fine_tuning)
        if result:
            save_metrics_to_file([result], args.output)