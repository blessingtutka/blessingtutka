import React from 'react';

interface ProjectCardProps {
    project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='project-thumb'>
                <div className='project-info'>
                    <div className='flex gap-2'>
                        {project.tags.map((tag, index) => (
                            <small className='project-tag bg-[rgba(0,139,255,0.2)] p-1 rounded-sm' key={index}>
                                {tag}
                            </small>
                        ))}
                    </div>

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
