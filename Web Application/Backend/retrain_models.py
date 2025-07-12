import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, accuracy_score
from sklearn.preprocessing import OneHotEncoder
import joblib
import os

def train_earthquake_model():
    """Train earthquake prediction model"""
    print("Training earthquake model...")
    
    # Load historical earthquake data
    data = pd.read_csv('../../Disaster Prediction ML Model/Dataset/EarthQuake-Data.csv')
    
    # Prepare features and target
    X = data[['Latitude', 'Longitude', 'Depth']]
    y = data['Magnitude']
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train model
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = rf_model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    print(f"Earthquake Model MSE: {mse}")
    
    # Save model
    joblib.dump(rf_model, 'earthquake_model.pkl')
    print("Earthquake model saved!")

def train_flood_model():
    """Train flood prediction model"""
    print("Training flood model...")
    
    # Load historical flood data
    data = pd.read_csv('../../Disaster Prediction ML Model/Dataset/Flood-Data.csv')
    
    # Rename columns to match expected format
    data.columns = [
        "Latitude", "Longitude", "Rainfall_mm", "Temperature_C", "Humidity_pct", 
        "River_Discharge_m3_s", "Water_Level_m", "Elevation_m", "Land_Cover", 
        "Soil_Type", "Population_Density", "Infrastructure", "Historical_Floods", 
        "Flood_Occurred"
    ]
    
    # Prepare features and target
    X = data[['Latitude', 'Longitude', 'Rainfall_mm', 'Elevation_m', 'River_Discharge_m3_s']]
    y = data['Flood_Occurred']
    
    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train model
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = rf_model.predict(X_test)
    mse = mean_squared_error(y_test, y_pred)
    print(f"Flood Model MSE: {mse}")
    
    # Save model
    joblib.dump(rf_model, 'flood_model.pkl')
    print("Flood model saved!")

def train_forest_fire_model():
    """Train forest fire prediction model"""
    print("Training forest fire model...")
    
    # Load historical forest fire data
    data = pd.read_csv('../../Disaster Prediction ML Model/Dataset/ForestFire-Data.csv')
    
    # Clean column names
    data.columns = data.columns.str.strip()
    
    # Calculate total occurrences
    data['Total_Occurrences'] = data[[ 
        'January 2018 to June 2018', 
        'November 2018 to June 2019',
        'November 2019 to June 2020',
        'November 2020 to June 2021',
        'November 2021 to June 2022',
        'November 2022 to June 2023'
    ]].sum(axis=1)
    
    # Classify risk
    def classify_risk(total_occurrences):
        if total_occurrences <= 5000:
            return 0  # Less Prone
        elif 5001 <= total_occurrences <= 12000:
            return 1  # Medium Prone
        else:
            return 2  # Highly Prone
    
    data['Risk_Level'] = data['Total_Occurrences'].apply(classify_risk)
    
    # Group by state
    state_occurrences = data.groupby('State/UT')['Total_Occurrences'].mean()
    state_occurrences_df = pd.DataFrame(state_occurrences).reset_index()
    
    # Prepare features
    X = state_occurrences_df[['State/UT']]
    y = state_occurrences_df['Total_Occurrences'].apply(classify_risk)
    
    # Create and fit encoder
    encoder = OneHotEncoder()
    X_encoded = encoder.fit_transform(X)
    
    # Split data
    X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)
    
    # Train model
    rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
    rf_model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = rf_model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Forest Fire Model Accuracy: {accuracy * 100:.2f}%")
    
    # Save model and encoder
    joblib.dump(rf_model, 'forest_fire_model.pkl')
    joblib.dump(encoder, 'one_hot_encoder.pkl')
    print("Forest fire model and encoder saved!")

if __name__ == "__main__":
    print("Retraining all models with current scikit-learn version...")
    
    # Change to the backend directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Train all models
    train_earthquake_model()
    train_flood_model()
    train_forest_fire_model()
    
    print("All models have been retrained and saved successfully!") 