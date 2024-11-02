import { experiences } from "@/data/experiences";
import React from "react";

const Experience = () => {
  return (
    <section className="mt-12">
      {/* Section Title */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-gray-800 lg:sr-only">
          Experience
        </h2>
      </div>
      
      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-3 p-6 rounded-lg bg-gray-600 bg-opacity-20 shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform"
          >
            <div className="text-gray-400 text-sm font-medium">
              {item.period}
            </div>
            <div>
              <p className="text-lg font-bold text-white">
                {item.employer} 
                <span className="text-sm font-medium text-gray-300 ml-3">| {item.employerLocation}</span>
              </p>
              <p className="mt-2 text-gray-200 text-base leading-relaxed">
                {item.jobDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
