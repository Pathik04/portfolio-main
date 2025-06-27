import React from "react";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading text-center">
        My <span className="text-purple">Work Experience</span>
      </h1>
      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute top-0 bottom-0 left-8 lg:left-1/2 lg:-translate-x-1/2 w-1 bg-gray-600"></div>
        <div className="space-y-12 lg:space-y-16">
          {workExperience.map((card, index) => (
            <div
              key={card.id}
              className={`relative flex items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 lg:gap-12`}
            >
              {/* Timeline Dot */}
              <div className="absolute w-8 h-8 bg-purple rounded-full border-4 border-white left-4 lg:left-1/2 lg:-translate-x-1/2"></div>

              {/* Content */}
              <div
                className={`bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full lg:w-1/2 ${
                  index % 2 === 0
                    ? "lg:ml-auto"
                    : "lg:mr-auto lg:translate-x-1/2"
                }`}
              >
                <h2 className="text-xl font-bold">{card.title}</h2>
                <h3 className="text-purple text-lg mb-3">{card.company}</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {card.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-400 text-sm">{card.dateRange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
