import React from "react";
import Earth from "../assets/Earthquake.jpg";
import Flood from "../assets/Flood.jpg";
import Fire from "../assets/Fire.jpg";
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <>
      <h1 className="text-4xl text-center lg:text-4xl font-bold text-[#1e181a] mb-4">
        Select Your Prefrence
      </h1>
      <div className="flex flex-wrap justify-center gap-24 p-6 mb-16">
        <div className="w-[250px] h-[350px] pb-3 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl">
          <div className="relative w-full h-[160px] bg-gray-300 rounded-xl rounded-b-none">
            <img src={Earth}></img>
          </div>
          <div className="flex flex-col items-center p-3">
            <h1 className="text-lg font-bold font-sans">Earthquake</h1>
            <p className="text-sm mb-3 font-semibold">
              Details: Earthquake predictions and safety tips.
            </p>
            <Link to="/Earth">
              <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-0.5 hover:scale-110  rounded px-2 py-1 text-white font-semibold bg-[#1e181a] w-[160px] mt-6 p-2">
                Get Prediction
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[250px] h-[350px] pb-3 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl">
          <div className="relative w-full h-[160px] bg-gray-300 rounded-xl rounded-b-none">
            <img src={Flood} className="object-contain"></img>
          </div>
          <div className="flex flex-col items-center p-3">
            <h1 className="text-lg font-bold font-sans">Flood</h1>
            <p className="text-sm mb-3 font-semibold">
              Details: Flood predictions and emergency alerts.
            </p>
            <Link to="/Flood">
              <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-0.5 hover:scale-110  rounded px-2 py-1 text-white font-semibold bg-[#1e181a] w-[160px] mt-6 p-2">
                Get Prediction
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[250px] h-[350px] pb-3 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-2xl">
          <div className="relative w-full h-[160px] bg-gray-300 rounded-xl rounded-b-none">
            <img src={Fire}></img>
          </div>
          <div className="flex flex-col items-center p-3">
            <h1 className="text-lg font-bold font-sans">Forest Fire</h1>
            <p className="text-sm mb-3 font-semibold">
              Details: Forest Fire predictions and alerts.
            </p>
            <Link to="/ForestFire">
              <button className="transition duration-500 ease-in-out transform hover:-translate-x-y-0.5 hover:scale-110  rounded px-2 py-1 text-white font-semibold bg-[#1e181a] w-[160px] mt-6 p-2">
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
