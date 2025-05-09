class ModelNameConfig:
    def __init__(self, model_name: str, fine_tuning: bool = True):
        self.model_name = model_name
        self.fine_tuning = fine_tuning

MODEL_CONFIGS = {

    "randomforest": {
        "n_estimators": 300,
        "max_depth": 10,
        "min_samples_split": 2,
        "min_samples_leaf": 1,
        "max_features": "sqrt",
        "bootstrap": True
    },
    "xgboost": {
        "n_estimators": 500,
        "learning_rate": 0.01,
        "max_depth": 7,
        "subsample": 0.9,
        "colsample_bytree": 0.9,
        "reg_alpha": 0.05,
        "reg_lambda": 0.7
    },
    "lightgbm": {
        "n_estimators": 500,
        "learning_rate": 0.01,
        "max_depth": -1,
        "num_leaves": 64,
        "subsample": 0.9,
        "colsample_bytree": 0.9,
        "reg_alpha": 0.05,
        "reg_lambda": 0.7
    },
    "linear_regression": {
        "model_type": "ridge",
        "alpha": 0.5
    }
}