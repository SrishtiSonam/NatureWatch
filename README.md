# Nature Watch

## Overview
This is a disaster prediction and preparedness platform designed to help **predict, prepare for, and protect** against natural disasters such as **earthquakes, floods, and forest fires** using **Machine Learning**. It features a **modern and intuitive UI** built with **React.js and Tailwind CSS**, while the backend is powered by **Flask** for efficient data processing and model inference.

---

## Features
- **Disaster Prediction:** Predicts the likelihood of earthquakes, floods, and forest fires based on historical and environmental data.
- **Preparedness Information:** Educates users with essential steps to prepare for possible disasters.
- **Protection Support:** Provides a channel to request and allocate help and resources effectively.
- **ML Models:** Trained on diverse datasets with detailed exploratory data analysis (EDA).
- **Interactive Web Application:** Clean, responsive design with real-time interactions.
- **Tech Stack:** Built with React.js & Tailwind CSS (Frontend), Flask (Backend), and Python-based ML models.

---

## Tech Stack

| Layer         | Technologies Used                     |
|---------------|----------------------------------------|
| **Frontend**  | React.js, Tailwind CSS                 |
| **Backend**   | Flask, Python                          |
| **ML Libraries** | Pandas, NumPy, Scikit-learn         |
| **Visualization** | Matplotlib, Seaborn               |

---

## Dataset & Preprocessing

Data was collected from various open data sources documenting past disaster events.

### Preprocessing Steps
1. **Exploratory Data Analysis (EDA):**
   - Handling missing values  
   - Feature engineering  
   - Visual exploration of patterns  
2. **Data Cleaning & Transformation:**
   - Normalization and scaling  
   - Encoding of categorical variables  
3. **Model Training & Evaluation:**
   - Train-test split  
   - Model training using Logistic Regression, Random Forest, etc.  
   - Performance metrics: Accuracy, Precision, Recall, F1-score  

---

## Model Integration

Once trained, ML models are served via a **Flask API**, which acts as the bridge between the frontend and the backend.
- Frontend collects user input  
- Sends request to Flask API  
- API processes input through ML models  
- Predictions are returned and visualized interactively in the UI  

---

## Installation & Setup

### Clone the Repository
git clone <repo-url>

### Backend setup (Flask)
cd backend
python -m venv env
env\Scripts\activate      
pip install --upgrade pip
pip install -r requirements.txt
python retrain_models.py     # Optional: retrain the models
python app.py

### Frontend setup (React js)
cd frontend
npm install
npm start

---

## Usage

- Enter relevant disaster-related data (e.g., location, humidity, temperature).
- View predictions for the likelihood of earthquakes, floods, or forest fires.
- Follow recommended preparation or response guidelines displayed on the dashboard.

---

## Future Enhancements

- Integration of real-time data from weather APIs and sensors.
- Satellite image processing for improved forest fire detection.
- Development of a mobile application for increased accessibility.
- PDF report generation for disaster summaries and alerts (upcoming).

---

## Contributing
Everyone is welcome for contributions to improve this project.
If you have suggestions or feature requests, please raise an issue before starting work to ensure alignment with the project goals.