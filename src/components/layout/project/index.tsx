import { SectionHeader } from '@/components/global';
import Projects from './projects';

const Project = () => {
    return (
        <div className='project relative pb-4' id='project'>
            <div className='container mx-auto px-4'>
                <SectionHeader title='Project' image='./images/project.jpg' />
                <Projects />
            </div>
        </div>
    );
};

export default Project;
