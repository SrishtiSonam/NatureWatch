import React from "react";
import Img from "../assets/Home-page-R.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  min-h-screen  px-4 mt-20 md:mt-4 md:px-16 lg:px-32 space-x-20">
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl lg:text-4xl font-bold text-[#1e181a] my-2">
          Disaster Prediction Platform
        </h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Harness the power of technology to predict natural disasters and save
          lives. Our platform offers real-time insights for:
        </p>
        <ul className="space-y-3">
          <li className="text-lg flex items-center text-gray-800">
            <span className="w-4 h-4 bg-red-600 rounded-full inline-block mr-3"></span>
            <strong className="mr-2">Earthquake Prediction:</strong>
            Historical Data analysis for early warnings.
          </li>
          <li className="text-lg flex items-center text-gray-800">
            <span className="w-4 h-4 bg-blue-600 rounded-full inline-block mr-3"></span>
            <strong className="mr-2">Flood Prediction: </strong> 60-80% Accuracy
          </li>
          <li className="text-lg flex items-center text-gray-800">
            <span className="w-4 h-4 bg-orange-600 rounded-full inline-block mr-3"></span>
            <strong className="mr-2">Wildfire Prediction: </strong> Data-driven
            insights to mitigate forest fires.
          </li>
        </ul>
        <Link to="/About">
          <button className="bg-[#1e181a] text-white text-lg px-2 py-2 mt-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            About us
          </button>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 mt-8 md:mt-6">
        <img src={Img} alt="Disaster Prediction" />
      </div>
    </div>
  );
};

export default Home;
