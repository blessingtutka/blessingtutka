import React from 'react';
import ProjectCard from './project-card';
import { projects } from '@/data';

const Projects: React.FC = () => {
    return (
        <div className='flex flex-wrap gap-2'>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;
