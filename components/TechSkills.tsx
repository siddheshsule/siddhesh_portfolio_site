import { techSkillIcons } from "@/data/tech-skill-icons";
import Image from "next/image";
import React from "react";

const TechSkills = () => {
  return (
    <div>
      <div className="relative">
        <div className="relative">
          <h2 className="text-wrap w-96 text-[24px] mt-3 mb-3 text-white">
            My Tech Skills
          </h2>
        </div>
        <div className="flex flex-wrap">
          {techSkillIcons.map((icon, index) => (
            <div key={index} className="hover:scale-150 m-2 hover:rotate-6 transition-all">
              <Image
                src={icon.iconUrl}
                alt={"python logo"}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSkills;
