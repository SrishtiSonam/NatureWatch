import React, { useState, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [maxHeight, setMaxHeight] = useState({});
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (answerRefs.current.length) {
      answerRefs.current.forEach((ref, index) => {
        if (ref) {
          setMaxHeight((prevMaxHeight) => ({
            ...prevMaxHeight,
            [index]: activeIndex === index ? ref.scrollHeight : 0,
          }));
        }
      });
    }
  }, [activeIndex]);

  const faqs = [
    {
      question: "What is Predict and how does it work?",
      answer:
        "Predict is an advanced disaster prediction platform that uses machine learning algorithms to predict natural disasters such as earthquakes, floods, and wildfires based on historical data, geographic parameters, and real-time inputs.",
    },
    {
      question: "What data do I need to input for disaster predictions?",
      answer:
        "For accurate disaster predictions, you need to provide location-specific data such as coordinates (latitude and longitude), depth (for earthquakes), and other relevant environmental parameters. This data helps our algorithms analyze the risk levels in your area.",
    },
    {
      question: "How accurate are the predictions?",
      answer:
        "While Predict uses sophisticated algorithms and data models to provide high-accuracy predictions, it is important to note that natural disasters are inherently unpredictable. Our predictions offer estimated risk levels based on available data and trends.",
    },
    {
      question: "Can I trust the risk levels provided by Predict?",
      answer:
        "The risk levels provided by Predict are based on advanced statistical models and scientific research. However, these should be considered as part of a broader disaster preparedness strategy and not as absolute predictions. Always follow official safety guidelines.",
    },
    {
      question: "How can I stay updated on disaster risks in my area?",
      answer:
        "You can regularly check the Predict platform for updates on the predicted risk levels in your region. We also recommend subscribing to local disaster response authorities for real-time alerts and notifications.",
    },
    {
      question: "Can Predict help me with disaster preparedness?",
      answer:
        "Yes! Predict not only provides disaster risk predictions but also offers tips and guidelines on how to prepare for different types of natural disasters, such as creating an emergency kit, evacuation plans, and safety procedures specific to your region.",
    },
  ];

  return (
    <section className="bg-white py-12 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-b border-grey-300 rounded-lg transition-all duration-500 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 md:px-6 py-3 md:py-4 text-left text-gray-800 focus:outline-none"
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <FaPlus className="text-[#1e181a]" />
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className="overflow-hidden transition-max-height duration-500 ease-in-out"
                style={{
                  maxHeight: `${maxHeight[index] || 0}px`,
                }}
              >
                <div className="px-4 md:px-6 pb-4 bg-white rounded-b-lg">
                  <p className="text-sm md:text-base text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
