import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const projectData = [
    {
        projectName: 'Bangladesh Government',
        projectDescription:'We are moving towards the digitalization of our country. Bangladesh Government mostly focuses on the ICT part and link3 is contributing like a magic wand.'
    },
    {
        projectName: 'RMG Industry',
        projectDescription:'We are moving towards the digitalization of our country. Bangladesh Government mostly focuses on the ICT part and link3 is contributing like a magic wand.'
    },
    {
        projectName: 'Telecom Industry',
        projectDescription:'We are moving towards the digitalization of our country. Bangladesh Government mostly focuses on the ICT part and link3 is contributing like a magic wand.'
    }
]

const Projects = () => {
    return (
        <section className="project-container container my-5">
            <div className="text-center">
                <h5>Our Project</h5>
                <h2>Our Industry Wise Service Categorized</h2>
            </div>
            <div className="row">
                {
                    projectData.map(project => <ProjectCard project={project} />)
                }
            </div>
        </section>
    );
};

export default Projects;