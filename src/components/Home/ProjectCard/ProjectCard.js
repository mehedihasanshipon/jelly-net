import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="project-card ">
                <div className="project-body p-4">
                <h3>{project.projectName} </h3>
                <p>{project.projectDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;