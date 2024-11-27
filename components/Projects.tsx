import React from "react";
import Image from "next/image";
import { projects } from "@/data/project-data";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul>
          {projects.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col">
                <div className="flex space-x-6 space-y-3 mb-5">
                  <div className="hover:scale-110 transition-all">
                    <Link
                      href="https://zentry-clone-wheat.vercel.app/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        src="/img/zentry-clone-image.png"
                        width={200}
                        height={48}
                        alt={""}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
