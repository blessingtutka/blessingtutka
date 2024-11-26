import React from 'react';

interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='project-thumb'>
                <div className='project-info'>
                    <small className='project-tag'>{project.tool}</small>
                    <h3 className='project-title'>{project.title}</h3>
                </div>
                <a href={project.link} className='popup-image' target='_blank' rel='noreferrer noopener'>
                    <img src={project.image} alt={project.title} className='project-image' />
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
