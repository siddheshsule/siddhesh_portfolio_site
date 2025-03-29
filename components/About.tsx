"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="mt-12">
      {/* Section Title */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <article className="text-lg">
        <AnimatePresence mode="wait">
          {showFullText ? (
            <motion.p
              key="full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-slate-300"
            >
              I’m Siddhesh Sule – a Germany-based Automotive Consultant and
              Project Leader with over 16 years of experience managing
              high-stakes projects across the automotive ecosystem. From EV
              systems to embedded electronics, I bridge engineering and business
              to deliver timely, cost-effective, and compliant automotive
              solutions.
              <br />
              With 16+ years in the automotive industry, I’ve led projects for
              global players like Mercedes-Benz, BMW, and Daimler Trucks,
              working with Tier-1 suppliers to develop cutting-edge systems. My
              focus areas include Embedded Systems, Electric Vehicles, System
              Architecture, and Process Compliance (ASPICE, ISO 26262).
              <br />
              I hold a Bachelor’s degree in Mechanical Engineering, PRINCE2
              Agile certification, and advanced training in C++ and autonomous
              systems. I'm passionate about combining technical depth with
              business sense to deliver results.
            </motion.p>
          ) : (
            <motion.p
              key="short"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-slate-300"
            >
              I’m Siddhesh Sule – a Germany-based Automotive Consultant and
              Project Leader with over 16 years of experience managing
              high-stakes projects across the automotive ecosystem. From EV
              systems to embedded electronics, I bridge engineering and business
              to deliver timely, cost-effective, and compliant automotive
              solutions...
            </motion.p>
          )}
        </AnimatePresence>

        <Button
          variant="outline"
          className="text-blue-500 underline bg-slate-600 hover:bg-slate-800 border-collapse w-10 scale-75 ml-2"
          size="icon"
          onClick={toggleText}
        >
          <motion.div
            animate={{ rotate: showFullText ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </article>
    </section>
  );
};

export default About;
