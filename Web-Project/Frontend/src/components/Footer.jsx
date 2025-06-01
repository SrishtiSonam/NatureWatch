import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#1e181a] p-4">
        <div className="bg-white items-center w-full md:max-w-7xl border border-[#fb8500]">
          <div className="flex flex-col justify-center items-center mt-3 space-y-2 md:mx-[50px] md:flex-row md:justify-between">
            <p className="text-md font-semibold text-gray-800 md:text-lg md:text-gray-500/90">
              Stay Informed with Our Disaster Updates Newsletter
            </p>
            <div className="md:text-lg">
              <input
                className="bg-gray-200/70 border drop-shadow-sm shadow-gray-700 rounded-md placeholder-slate-400 px-2 py-1 focus:outline-none focus:border-[#8ecae6]"
                type="email"
                placeholder="E-mail Address"
              />
              <button className="p-1 m-1 rounded-md text-white bg-[#1e181a] hover:text-[#1e181a] hover:bg-white hover:font-semibold hover:transform ease-in-out duration-300">
                Subscribe
              </button>
            </div>
            <div className="text-center text-lg md:space-x-1">
              <a
                className="w-9 h-10 pt-1 m-2 md:ml-2 md:mr-0 inline-block border-1 rounded-lg text-white bg-[#219ebc] hover:bg-white hover:text-[#219ebc]"
                href="https://x.com/"
                target="_blank"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-[#fb8500] hover:bg-white hover:text-[#fb8500]"
                href="https://www.google.com/"
                target="_blank"
              >
                <i className="fa fa-google"></i>
              </a>
              <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-[#ffb703] hover:bg-white hover:text-[#ffb703]"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-[#8ecae6] hover:bg-white hover:text-[#8ecae6]"
                href="https://telegram.org/"
                target="_blank"
              >
                <i className="fa fa-telegram"></i>
              </a>
              <a
                className="w-9 h-10 pt-1 m-2 inline-block border-1 rounded-lg text-white bg-[#023047] hover:bg-white hover:text-[#023047]"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
          <hr className="mt-2 md:overflow-hidden" />
          <div className="grid grid-cols-2 justify-center my-3 text-center md:grid-cols-4">
            <div className="flex items-center flex-col leading-7">
              <h1 className="text-[#1e181a] text-lg font-semibold">Features</h1>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Earthquake Predictions
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Flood Alerts
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Wildfire Warnings
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Data Analytics
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Live Monitoring
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center leading-7">
              <h1 className="text-[#1e181a] text-lg font-semibold">
                Resources
              </h1>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Disaster Management Tips
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Emergency Contacts
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Blog
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  FAQ
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center my-6 leading-7 md:my-0">
              <h1 className="text-[#1e181a] text-lg font-semibold">Support</h1>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Contact Us
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Technical Support
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  Feedback
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center my-6 leading-7 md:my-0">
              <h1 className="text-[#1e181a] text-lg font-semibold">
                Contact Us
              </h1>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  support@disasterpredict.com
                </a>
              </p>
              <p>
                <a className="text-gray-500/80 hover:text-[#1e181a]" href="#">
                  (+91) 123-456-7890
                </a>
              </p>
            </div>
          </div>
          <hr className="mt-2 md:invisible" />
          <div className="flex flex-col items-center m-5 md:flex-row md:justify-between md:mx-28">
            <div className="mt-4 text-gray-500 font-semibold">
              <a className="hover:text-[#1e181a] tracking-wide" href="#">
                About Us
              </a>{" "}
              <strong>|</strong>{" "}
              <a className="hover:text-[#1e181a] tracking-normal" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
