"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa";

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section>
      <article className="text-lg">
        {showFullText ? (
          <>
            I originally hail from India and now a proud German citizen! I have
            over 16 years of experience in the German Automotive Industry and
            worked closely with some premium German OEMs like Mercedes-Benz AG,
            BMW AG, AUDI and Volkswagen AG. I have vastly worked as a technical
            lead for complex automotive components like Steering Column Control
            Modules, Steering Angle Sensors, simple & complex Mechatronics
            switches and EV E-Locks. During the pandemic, I embarked on a
            transformative journey into computer science, beginning with
            foundational skills in Python and Java and quickly advancing to C++.
            Driven by curiosity and a dedication to innovate within the digital
            space, I expanded my expertise to full-stack development, mastering
            the MERN stack along with React and Next.js. This progression has
            empowered me to create dynamic applications, with a focus on
            usability and cutting-edge functionality. As my career evolved, I
            applied my technical skills within the automotive industry, managing
            complex engineering projects and leading cross-functional teams.
            This experience honed my ability to balance precision with strategic
            project management, resulting in seamless and efficient
            implementations. Now, I&apos;m channeling this blend of technical
            and project management expertise into the fintech and SaaS domains,
            exploring innovative applications that address key market pain
            points. My recent projects include a Deezer-integrated music app, an
            AI-powered bug tracking tool, and an upcoming portfolio website
            built with Next.js, TypeScript, and Tailwind CSS. My goal is to
            build a SaaS startup with products that are not only efficient but
            transformative, adding true value by solving complex, real-world
            problems for users.
          </>
        ) : (
          <>
            I originally hail from India and now a proud German citizen! I have
            over 16 years of experience in the German Automotive Industry and
            worked closely with some premium German OEMs like Mercedes-Benz AG,
            BMW AG, AUDI and Volkswagen AG. I have vastly worked...
          </>
        )}
        <Button variant="outline" className="text-blue-500 ml-2 underline bg-slate-600 hover:bg-slate-800 border-collapse w-6 scale-75" size="icon" onClick={toggleText}>
          {showFullText ? (
            <FaChevronUp  className="h-4 w-4" />
          ) : (
            <FaChevronDown className="h-4 w-4" />
          )}
        </Button>
      </article>
    </section>
  );
};

export default About;
