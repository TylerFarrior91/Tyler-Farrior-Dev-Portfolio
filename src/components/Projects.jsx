import React, { useState } from 'react';
import projectData from "../proj.json"

const Projects = () => {
  const [projectArray] = useState(projectData)

  return (
    <section id="projects">
      <h2 className= "center">Projects</h2>
      {projectArray.map((project) => (
        <div key={project.id} className="project">
          <h3 className= "center">{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
