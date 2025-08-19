# FarmSarthi - Empowering Farmers with Smart Agriculture Solutions

**FarmSarthi** is a smart, data-driven web application designed to help farmers make informed decisions. By integrating machine learning, environmental data, advanced imaging techniques, and innovative marketplace features, we aim to provide farmers with real-time insights into rainfall patterns, crop recommendations, disease management, and more.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Website Usage](#website-usage)
- [Future Work](#future-work)
- [Team Members](#team-members)

## Project Overview
FarmSarthi offers farmers a comprehensive solution for smarter agricultural practices, utilizing cutting-edge technologies such as machine learning and computer vision. Key highlights include:
- **Rainfall & Climate Analysis:** In-depth analysis of district-wise rainfall patterns and climate variations to help farmers plan their sowing and irrigation strategies.
- **Crop Recommendations:** AI-based suggestions for optimal crops to grow, based on soil nutrients, temperature, and humidity.
- **Disease Prediction & Management:** Our system predicts potential crop diseases and offers management tips, using both traditional and advanced methods like hyperspectral imaging.
- **Voice Assistance:** A voice-enabled system that allows farmers to interact with the app hands-free, making it user-friendly for all.
- **Image Analysis for Disease Detection:** Farmers can upload photos of crops, and the app selects the best out of 3 images to analyze for disease detection.
- **Multilingual Support:** Farmers can access the platform in multiple regional languages, ensuring ease of use for everyone.
- **Trusted User Marketplace:** A secure, verified platform for farmers to sell or buy products from other farmers or retailers.
- **Disease Prediction:** The app predicts the most likely disease in a farm based on current environmental and crop conditions.

FarmSarthi aims to simplify agricultural decision-making, reduce risks, and improve yields for farmers across India.

## Features
- **Rainfall Analysis:** Understand actual vs. normal rainfall and deviation trends.
- **Crop Recommendations:** AI-based suggestions for ideal crops to grow in specific environmental conditions.
- **Disease Prediction:** Forecast potential crop diseases and offer actionable management tips.
- **Interactive Reports:** Generate detailed analysis reports from user-uploaded data.
- **Voice Assistance:** Voice-controlled features for ease of use.
- **Best Camera Angle Selection:** Automated selection of the best image out of three for better accuracy in disease detection.
- **Multilingual Support:** Access the app in various regional languages for easy navigation.
- **Trusted User System:** Farmers and retailers are verified to maintain trust and transparency in the marketplace.
- **Marketplace:** A platform for farmers to trade goods with each other or retailers, ensuring fair access to resources.
- **Most Likely Disease Prediction:** AI-powered predictions on the most probable diseases affecting the crops in a specific farm.
- **AI-powered AR Image Assistance:** While capturing crop photos, the app will use augmented reality (AR) to guide farmers on the optimal way to take the picture for disease detection.
- **AI Chatbot:** An intelligent AI chatbot that guides farmers with personalized crop advice, disease predictions, and easy voice-enabled support.

## Technologies Used
- **Backend:** Node JS
- **Frontend:** HTML, CSS, JavaScript, React, React Native
- **Machine Learning:** scikit-learn, pandas, TensorFlow
- **Database:** MongoDB
- **Deployment:** AWS EC2, Docker
- **Additional Technologies:** NLP for voice recognition, image processing for camera selection, multilingual integration.

## Getting Started
To get started with the project, clone the repository and install the necessary dependencies.

```bash
git clone https://github.com/bestcoder22/FarmSarthi.git
cd FarmSarthi
cd backend
npm install
cd ../frontend
npm install
cd ..
py -m venv venv
source venv/Scripts/activate
cd ML
pip install -r requirements.txt
cd ../chatbot
pip install -r requirements.txt
```
Open 'Docker Desktop'
Run below command from command prompt
```bash
docker run --name my-redis -p 6379:6379 -d redis:7
```
after this run below command to confirm docker image is running
```bash
docker exec -it my-redis redis-cli ping
```
you should see below output
PONG


## Website Usage
Once the project is set up, you can start the web application using the following command on your root directory:

```bash
cd ML
uvicorn app:app --reload
cd ../chatbot
python app.py
cd ../backend
npm start
cd ../frontend
npm run dev
```

Open your browser and navigate to `http://localhost:5173/` to use the application.


## Future Work
We are actively working on enhancing FarmSarthi by introducing:
- **Hyperspectral Reflectance Method:** We are exploring hyperspectral imaging techniques to predict crop diseases more accurately, leveraging the reflectance properties of leaves and plants.
- **Expanded Crop and Disease Prediction Models:** Building more robust models to predict diseases in a broader range of crops and environmental conditions.

These features are in development and will be added to future versions of FarmSarthi.

## Team Members
This project is a collaborative effort by:
- **Shyam** (Team Leader) - back-end, front-end, database-development, full-stack-development, android-development, ui-ux, machine-learning, system-design
- **Soham Amrutkar** – back-end, front-end, database-development, full-stack-development, machine-learning, system-design
- **Spandan Salunkhe** – deep Learning,  model design & development, full-stack-development, genai

For inquiries, feel free to contact us via [FarmSarthi@gmail.com](mailto:FarmSarthi@gmail.com).


---

