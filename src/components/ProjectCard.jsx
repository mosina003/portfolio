import React from "react";
import { Img } from "react-image";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, image, techStack, link }) => {
  return (
    <div className="project-card">
      <Img 
        src={image}
        alt={title}
        loader={<div className="image-loader">Loading...</div>}
        unloader={<div className="image-error">Image not available</div>}
        className="project-img"
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
