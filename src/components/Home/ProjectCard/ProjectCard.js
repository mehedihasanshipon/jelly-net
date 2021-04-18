import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6 col-lg-4 mt-3">
      <div className="project-card ">
        <div className="project-body p-4">
          <img className="img-fluid project-img" src={project.image} alt="" />
          <h6 className="pt-3">{project.projectName} </h6>
          <p>{project.desc}</p>
          <button className="project-btn">Take a look</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
