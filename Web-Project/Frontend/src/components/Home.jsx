import React from "react";
import Img1 from "../assets/Earthquake.jpg";
import Img2 from "../assets/Flood.jpg";
import Img3 from "../assets/Fire.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  min-h-screen  px-4 mt-20 md:mt-4 md:px-16 lg:px-32 space-x-20">
      {/* Left Section: Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
<h1 className="text-4xl font-bold text-[#1e181a] my-4">
  Predict. Prepare. Protect.
</h1>
<p className="text-lg text-gray-700">
  Empowering smarter disaster response through AI-driven forecasting.
</p>
<ul className="space-y-3 mt-4">
  <li className="text-lg flex items-center text-gray-800">
    <span className="w-3 h-3 bg-gray-600 rounded-full inline-block mr-3"></span>
    <strong className="mr-2">Smart Disaster Forecasting</strong>
  </li>
  <li className="text-lg flex items-center text-gray-800">
    <span className="w-3 h-3 bg-gray-600 rounded-full inline-block mr-3"></span>
    <strong className="mr-2">Live Insights Dashboard</strong>
  </li>
  <li className="text-lg flex items-center text-gray-800">
    <span className="w-3 h-3 bg-gray-600 rounded-full inline-block mr-3"></span>
    <strong className="mr-2">Early Warning System</strong>
  </li>
</ul>

        <Link to="/About">
          <button className="bg-[#1e181a] text-white text-lg px-2 py-2 mt-8 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            About us
          </button>
        </Link>
      </div>

      {/* Right Section: Image */}
      <div className="flex-1 mt-8 md:mt-6 relative min-h-[28rem]">
        {/* Top Right Image */}
        <div className="absolute top-0 right-0 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center hover:scale-105 transition-transform rotate-[-3deg]">
          <img src={Img1} alt="Disaster Prediction" className="rounded-lg w-60 h-44 object-cover" />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center hover:scale-105 transition-transform rotate-2">
          <img src={Img2} alt="Flood Prediction" className="rounded-lg w-60 h-44 object-cover" />
        </div>

        {/* Center Left Image */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 flex flex-col items-center hover:scale-105 transition-transform -rotate-2">
          <img src={Img3} alt="Wildfire Prediction" className="rounded-lg w-60 h-44 object-cover" />
        </div>
      </div>

    </div>
  );
};

export default Home;
