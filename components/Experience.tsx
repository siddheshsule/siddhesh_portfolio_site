"use client"

import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";
import React from "react";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

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
        {experiences.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex flex-col space-y-3 p-6 rounded-2xl bg-gray-700 bg-opacity-30 shadow-lg transform hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-gray-400 text-sm font-medium">{item.period}</div>
            <div>
              <p className="text-lg font-bold text-white">
                {item.employer}
                <span className="text-sm font-medium text-gray-300 ml-3">
                  | {item.employerLocation}
                </span>
              </p>
              <p className="mt-2 text-gray-200 text-base leading-relaxed">
                {item.jobDescription}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
