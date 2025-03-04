import React, { useState } from "react";
import healthcare from "./assets/healthcare.png";
import innovation from "./assets/innovation.png";
import banking from "./assets/banking.png";
import environment from "./assets/environment.png";
import education from "./assets/education.png";
import transportation from "./assets/transportation.png";

const PS = () => {
  const [selectedPS, setSelectedPS] = useState(null);
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
      name: "Banking and Finance",
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
    <div className="min-h-screen flex items-center justify-center bg-[#800000] p-6">
      <div className="w-full max-w-10xl bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-6">
        <div className="mb-4 text-left">
          <h2 className="text-2xl font-bold text-white">Problem Statements</h2>
        </div>

        {/* Problem Statements List */}
        <div className="flex items-center -mx-1 overflow-x-auto space-x-3 rounded-lg shadow-md p-3">
          {PS.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-40 h-24 flex-shrink-0">
              <p
                className={`relative w-full h-full flex items-center justify-center px-10 py-5 text-lg font-semibold cursor-pointer text-white rounded-lg transition duration-300 hover:opacity-80 transform -skew-x-12  ${selectedPS?.number === step.number ? 'bg-black/30' : 'bg-white/30'}`}
                onClick={() => setSelectedPS(step)}
              >
                <img src={step.image} alt="Icon" className="absolute -top-3 -left-3 w-10 h-10 rounded-full" />
                {step.name}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Problem Statement Info */}
        {selectedPS && (
          <div className="relative mt-6 p-4 rounded-lg bg-black/30 shadow-md">
            <img src={selectedPS.image} alt="Icon" className="absolute -top-3 -left-3 w-15 h-15 rounded-full" />
            <p className="text-lg font-semibold text-white">Selected: {selectedPS.name}</p>
            <p className="text-white">{selectedPS.info}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PS;
