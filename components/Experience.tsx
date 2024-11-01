import { experiences } from "@/data/experiences";
import React from "react";

const Experience = () => {
  return (
    <section className="mt-12">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        {experiences.map((item) => (
          <div
            className="flex space-x-10 mb-6 hover:bg-slate-100 hover:bg-opacity-15 hover:text-white transition-all "
            key={item.id}
          >
            <div className="">
              <p>{item.period}</p>
            </div>
            <div className="">
              <p>
                <span className="text-lg font-bold mr-2">{item.employer}</span>{" "}
                | <span className="ml-2">{item.employerLocation}</span>
              </p>
              <p className="mt-3 text-justify text-lg">{item.jobDescription}</p>
            </div>            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
