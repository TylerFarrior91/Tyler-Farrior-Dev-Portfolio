"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Matter Of Taste",
    description: "Matter of Taste is your culinary haven, offering a curated collection of diverse recipes designed for every cook, from beginners to seasoned chefs. Discover easy-to-follow recipes, cooking tips, and vibrant food inspiration. We simplify cooking, celebrate seasonal ingredients, and embrace various dietary preferences. Join our community, explore food cultures, and transform your kitchen into a creative sanctuary. At Matter of Taste, every dish is a delightful adventure waiting to happen. Start your flavorful journey today!",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TylerFarrior91/Matter-of-Taste/",
    previewUrl: "https://matter-of-taste-2cb992252e34.herokuapp.com/",
  },
  {
    id: 2,
    title: "JMC Publishing Website",
    description: "JMC Publishing is an independent company focused on establishing new and fresh fantasy content and building new worlds... Saturday Morning for the former 80's and 90's kids and the new mythology for the youths.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TylerFarrior91/JMC-Publishing",
    previewUrl: "https://tylerfarrior91.github.io/JMC-Publishing/",
  },
  {
    id: 3,
    title: "Shelf-Movies Website",
    description: "ShelfMovies A simple movie website that has a place that shows popular movies with trailers",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/TylerFarrior91/Shelf-Movies",
    previewUrl: "https://miekooooo.github.io/project-1/",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description: "",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
