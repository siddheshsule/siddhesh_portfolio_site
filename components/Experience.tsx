import { experiences } from "@/data/experiences";
import React from "react";
import TechnologyLabel from "./ui/technology-label";

const Experience = () => {
  return (
    <div>
      <div>
        {experiences.map((item) => (
          <div
            className="flex space-x-10 mb-6 p-3 hover:bg-slate-300 hover:bg-opacity-25 hover:text-white "
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

              <p className="inline-block mt-6 space-x-2 ">
                {item.technologiesUsed.map((tech) => (
                  <TechnologyLabel name={tech} />
                ))}
              </p>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
