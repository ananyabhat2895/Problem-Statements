import React, { useState, useEffect } from "react";
import healthcare from "./assets/healthcare.png";
import innovation from "./assets/innovation.png";
import banking from "./assets/banking.png";
import environment from "./assets/environment.png";
import education from "./assets/education.png";
import transportation from "./assets/transportation.png";

const PS = () => {
  const [selectedPS, setSelectedPS] = useState(null);

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const PS = [
    {
      number: 1,
      name: "Healthcare",
      info: "Healthcare Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere odio error. Reiciendis adipisci enim laudantium deleniti cupiditate ad nulla minus facere similique. Quibusdam, vero. Similique earum ullam impedit. Corporis?",
      image: healthcare,
    },
    {
      number: 2,
      name: "Open Innovation",
      info: "Open Innovation Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere odio error. Reiciendis adipisci enim laudantium deleniti cupiditate ad nulla minus facere similique. Quibusdam, vero. Similique earum ullam impedit. Corporis?",
      image: innovation,
    },
    {
      number: 3,
      name: "Banking & Finance",
      info: "Banking and Finance Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere odio error. Reiciendis adipisci enim laudantium deleniti cupiditate ad nulla minus facere similique. Quibusdam, vero. Similique earum ullam impedit. Corporis?",
      image: banking,
    },
    {
      number: 4,
      name: "Environmental Sustainability",
      info: "Environmental Sustainability Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere odio error. Reiciendis adipisci enim laudantium deleniti cupiditate ad nulla minus facere similique. Quibusdam, vero. Similique earum ullam impedit. Corporis?",
      image: environment,
    },
    {
      number: 5,
      name: "Education",
      info: "Education Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere odio error. Reiciendis adipisci enim laudantium deleniti cupiditate ad nulla minus facere similique. Quibusdam, vero. Similique earum ullam impedit. Corporis?",
      image: education,
    },
    {
      number: 6,
      name: "Transportation",
      info: "Transportation Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facere odio error. Reiciendis adipisci enim laudantium deleniti cupiditate ad nulla minus facere similique. Quibusdam, vero. Similique earum ullam impedit. Corporis?",
      image: transportation,
    },
  ];

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#800000]">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Problem Statements</h2>

        {/* Problem Statements List */}
        <div className="p-3">
          <div className="grid gap-4 max-w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {PS.map((step, index) => (
              <div key={index} className="w-full flex flex-col items-center text-center">
                <p
                  className={`relative w-33 h-24 text-3xs  
                    flex items-center justify-center p-3 text-sm font-semibold cursor-pointer text-white 
                    rounded-lg transition duration-300 hover:opacity-80 transform -skew-x-12 
                    ${selectedPS?.number === step.number ? "bg-white/35" : "bg-white/10"}`}
                  onClick={() => setSelectedPS(step)}
                >
                  <img
                    src={step.image}
                    alt="Icon"
                    className="mb-1 w-5 h-5 md:w-8 md:h-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
                  />
                  {step.name}
                </p>
                {isMobileView && selectedPS?.number === step.number && (
                  <div className="mt-2 w-full p-3 rounded-lg bg-white/15 shadow-md text-white text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <img src={selectedPS.image} alt="Icon" className="w-5 h-5" />
                      <p className="font-semibold">Selected: {selectedPS.name}</p>
                    </div>
                    <p>{selectedPS.info}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Selected Problem Statement Info for larger screens */}
        {!isMobileView && selectedPS && (
          <div className="relative mt-6 p-4 rounded-lg bg-white/15 shadow-md">
            <div className="flex items-center space-x-2 mb-2 text-white">
              <img src={selectedPS.image} alt="Icon" />
              <p className="text-sm font-semibold text-white">Selected: {selectedPS.name}</p>
            </div>
            <p className="text-white">{selectedPS.info}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PS;
