"use client";

import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "06",
    category: "frontend",
    title: "Social Media App",
    description: "A web application that allows users to share their thoughts.",
    stack: [
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/projects/thumb5.png",
    live: "https://social-aobwiil4p-alaa-harb7s-projects.vercel.app/",
    github: "https://github.com/alaa-harb7/social-app",
  },
  {
    num: "01",
    category: "frontend",
    title: "Frontend Project",
    description: "A resposive web template, modern UI.",
    stack: [
      { name: "JavaScript" },
      { name: "Css" },
      { name: "Bootstrap" },
      { name: "HTML" },
    ],
    image: "/assets/projects/thumb4.png",
    live: "https://alaa-harb7.github.io/template-3-project/",
    github: "https://github.com/alaa-harb7/template-3-project",
  },
  {
    num: "02",
    category: "frontend",
    title: "Admin Dashboard",
    description:
      "A web application that allows users to manage their tasks and projects.",
    stack: [{ name: "React.js" }, { name: "Bootstrap" }, { name: "Vite" }],
    image: "/assets/projects/thumb6.png",
    live: "https://advanced-dashboard-react-js-m1jq.vercel.app/",
    github: "https://github.com/alaa-harb7/advanced-dashboard-react.js",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Admin Dashboard",
    description: "Dashboard for a Management System.",
    stack: [{ name: "JavaScript" }, { name: "Bootstrap" }, { name: "HTML" }],
    image: "/assets/projects/thumb1.png",
    live: " https://alaa-harb7.github.io/dashboard-bootstrap/",
    github: "https://github.com/alaa-harb7/dashboard-bootstrap",
  },
  {
    num: "04",
    category: "frontend",
    title: "Resturant App",
    description:
      "A web application that allows users to order food from a resturant.",
    stack: [{ name: "JavaScript" }, { name: "Bootstrap" }, { name: "WOW.js" }],
    image: "/assets/projects/thumb2.png",
    live: "https://alaa-harb7.github.io/resturant-project/",
    github: "https://github.com/alaa-harb7/resturant-project",
  },
  {
    num: "05",
    category: "frontend",
    title: "Special Porftolio",
    description:
      "A web application showing my skills and projects as a developer.",
    stack: [{ name: "JavaScript" }, { name: "Bootstrap" }, { name: "HTML" }],
    image: "/assets/projects/thumb3.png",
    live: "https://alaa-harb7.github.io/special-porfolio/",
    github: "https://github.com/alaa-harb7/special-porfolio",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <h3 className="h3 mb-8 text-accent text-center">Selected work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={90}
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover rounded-xl"
                  priority={project.num === "02"}
                />
              </div>

              {/* Project Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/95 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm mt-2 text-white/80">
                  {project.description}
                </p>

                {/* Stack */}
                <ul className="flex gap-2 text-xs mt-2">
                  {project.stack.map((item, index) => (
                    <li key={index} className="text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsArrowUpRight className="text-xl" />
                    </div>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 bg-secondary text-accent rounded-full flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all duration-500">
                      <BsGithub className="text-xl" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
