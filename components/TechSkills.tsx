"use client";

import { techSkillIcons } from "@/data/tech-skill-icons";
import Image from "next/image";
import React from "react";

const TechSkills = () => {
  return (
    <section className="mt-12">
      <div className="relative mb-6">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-slate-200">
          Technical Skills
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {techSkillIcons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-slate-700 bg-opacity-30 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={icon.iconUrl}
              alt={icon.iconName}
              width={50}
              height={50}
              className="mb-2 hover:scale-110 transition-transform duration-300"
            />
            <span className="text-sm text-slate-300">{icon.iconName}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSkills;
