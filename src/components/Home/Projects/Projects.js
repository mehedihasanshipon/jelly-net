import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
import projectImg from '../../../images/woman.jpg'
import one from '../../../images/1.jpg'
import two from '../../../images/2.jpg'
import three from '../../../images/3.jpg'

const projectData = [
    {
        projectName: 'Bangladesh Government',
        image: one,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        projectName: 'RMG Industry',
        image: two,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        projectName: 'Telecom Industry',
        image: three,
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }
]

const Projects = () => {
    return (
        <section className="project-container container ">
            <div className="text-center">
                <h5>Our Project</h5>
                <h2>Explore our some projects</h2>
               
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