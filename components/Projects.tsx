"use client";

import React from "react";
import Image from "next/image";
import { projects } from "@/data/project-data";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="mt-12">
      {/* Section Title */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      {/* Project Cards */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <li key={project.id} className="bg-slate-800 bg-opacity-40 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col space-y-4">
              <Link
                href={project.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-md"
              >
                <Image
                  src={project.projectImageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </Link>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
