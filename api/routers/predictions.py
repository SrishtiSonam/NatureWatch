from pathlib import Path
from typing import List
from fastapi import APIRouter, Depends, HTTPException, Request
from api.services.model_service import ModelService, get_model_service
from api.models.schemas import PredictionInput, PredictionOutput
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/models", response_model=List[str])
async def get_available_models():
    """Get list of available models in ml-models directory"""
    model_dir = Path("ml-models")
    return [f.stem for f in model_dir.glob("*.pkl")]

@router.post("/predict", response_model=PredictionOutput)
async def predict(
    data: PredictionInput,
    model_service: ModelService = Depends(get_model_service)
):
    try:
        prediction = model_service.predict(data.model_name, data.dict(exclude={'model_name'}))
        prediction_variability = model_service.precision(data.model_name)
        return {
            "prediction": prediction,
            "prediction_variability": prediction_variability
        }

    except FileNotFoundError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except ValueError as e:
        logger.error(f"Validation error: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Prediction failed: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")