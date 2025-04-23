import ProjectCard from './project-card';

const Projects: React.FC<{ projectsPaginated: IProject[] }> = ({ projectsPaginated }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='projects flex flex-wrap gap-4 justify-center'>
                {projectsPaginated.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
