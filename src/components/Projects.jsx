import React from 'react';
import './Projects.css';
import { getProjects } from '../services/ProjectService';

const Projects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        const load = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        load();
    }, []);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Major ongoing Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card glass" key={index}>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className={`project-status-tag ${project.status.toLowerCase()}`}>{project.status}</div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="client">Client: {project.client}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
