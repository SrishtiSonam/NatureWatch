# 🌍 Naturewatch

A real-time disaster prediction and management platform built to help authorities and civilians respond faster and more effectively. From early warnings to resource allocation, medical support, and rescue coordination—DisasterGuard brings everything into one intelligent system.

---

## 📌 Overview

**Naturewatch** leverages AI and real-time data from multiple APIs to predict potential disasters and manage resources efficiently. The platform enables disaster control teams to allocate resources, address medical emergencies, and track missing persons—all from a single dashboard.

---

## 🌟 Features

### 🎯 Core Functionalities

- 🔮 **Disaster Prediction Engine**  
  Uses historical data + API feeds (weather, seismic, flood) to forecast risks in real-time.

- 🗺️ **Live Resource Management Dashboard**  
  Real-time visualization of:
  - Available and deployed resources (food, shelter, rescue teams)
  - Demand heatmaps based on region & population
  - Active medical cases and rescue status for missing individuals

- 🏥 **Medical Assistance Coordination**  
  Submit and manage real-time medical help requests, triage severity levels.

- 🧍‍♂️ **Missing Person Tracking**  
  Search and manage missing person reports with live updates on rescue efforts.

- 🧾 **Generate Disaster Reports (PDF)**  
  Export zone-wise reports that include risk levels, allocated resources, rescue status, and casualties.

- 🌐 **API Integrations**  
  - IMD Weather API / OpenWeather  
  - USGS Earthquake / Flood Monitoring APIs  
  - (Optional) Twilio or Telegram Bot for alerts

- 📱 **Responsive UI with Modern Design**  
  Optimized for mobile and web for field workers and officials alike.

---

## 🛠️ Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Frontend    | React.js + Tailwind CSS |
| Backend     | Flask (Python) + Flask-RESTful |
| Database    | PostgreSQL / SQLite     |
| Maps        | Leaflet.js / Mapbox API |
| Charts      | Chart.js / Recharts     |
| APIs        | Weather, Seismic, Rescue Bot (Telegram/Twilio) |
| PDF Export  | ReportLab / WeasyPrint / Flask-PDFKit |

---

## 📊 Real-Time Dashboard Includes

- 📉 Predicted risk levels (color-coded by zone)
- 🏥 Current medical emergencies
- 🧺 Resource stock vs demand
- 🧍 Missing person status
- 🗺️ Live map with location-based alerts and team tracking

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/disasterguard.git
cd disasterguard

# Frontend
cd frontend
npm install
npm start

# Backend
cd backend
pip install -r requirements.txt
python app.py
