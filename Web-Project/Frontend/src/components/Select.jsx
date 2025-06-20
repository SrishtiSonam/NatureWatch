import React from "react";
import Earth from "../assets/Earthquake.jpg";
import Flood from "../assets/Flood.jpg";
import Fire from "../assets/Fire.jpg";
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <>
      <h1 className="text-4xl text-center font-extrabold text-[#1e181a] mb-10 tracking-tight drop-shadow-lg">
        Select Your Preference
      </h1>
      <div className="flex flex-wrap justify-center gap-12 p-6 mb-16">
        {/* Earthquake Card */}
        <div className="w-[300px] h-[400px] bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-3xl hover:-rotate-2 flex flex-col">
          <div className="relative w-full h-[200px] bg-gradient-to-tr from-[#e0e7ff] to-[#f1f5f9] flex items-center justify-center">
            <img
              src={Earth}
              alt="Earthquake"
              className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center p-5 flex-1">
            <h2 className="text-xl font-bold font-sans text-[#1e181a] mb-2">
              Earthquake
            </h2>
            <p className="text-base mb-4 font-medium text-gray-700 text-center">
              Details: Earthquake predictions and safety tips.
            </p>
            <Link to="/Earth" className="mt-auto">
              <button className="transition duration-300 ease-in-out transform hover:scale-105 rounded-lg px-4 py-2 text-white font-semibold bg-gradient-to-r from-[#1e181a] to-[#4b5563] w-[180px] shadow-md">
                Get Prediction
              </button>
            </Link>
          </div>
        </div>
        {/* Flood Card */}
        <div className="w-[300px] h-[400px] bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-3xl hover:rotate-2 flex flex-col">
          <div className="relative w-full h-[200px] bg-gradient-to-tr from-[#bae6fd] to-[#f1f5f9] flex items-center justify-center">
            <img
              src={Flood}
              alt="Flood"
              className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center p-5 flex-1">
            <h2 className="text-xl font-bold font-sans text-[#1e181a] mb-2">
              Flood
            </h2>
            <p className="text-base mb-4 font-medium text-gray-700 text-center">
              Details: Flood predictions and emergency alerts.
            </p>
            <Link to="/Flood" className="mt-auto">
              <button className="transition duration-300 ease-in-out transform hover:scale-105 rounded-lg px-4 py-2 text-white font-semibold bg-gradient-to-r from-[#1e181a] to-[#2563eb] w-[180px] shadow-md">
                Get Prediction
              </button>
            </Link>
          </div>
        </div>
        {/* Forest Fire Card */}
        <div className="w-[300px] h-[400px] bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-3xl hover:-rotate-3 flex flex-col">
          <div className="relative w-full h-[200px] bg-gradient-to-tr from-[#fca5a5] to-[#f1f5f9] flex items-center justify-center">
            <img
              src={Fire}
              alt="Forest Fire"
              className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex flex-col items-center p-5 flex-1">
            <h2 className="text-xl font-bold font-sans text-[#1e181a] mb-2">
              Forest Fire
            </h2>
            <p className="text-base mb-4 font-medium text-gray-700 text-center">
              Details: Forest Fire predictions and alerts.
            </p>
            <Link to="/ForestFire" className="mt-auto">
              <button className="transition duration-300 ease-in-out transform hover:scale-105 rounded-lg px-4 py-2 text-white font-semibold bg-gradient-to-r from-[#1e181a] to-[#dc2626] w-[180px] shadow-md">
                Get Prediction
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
