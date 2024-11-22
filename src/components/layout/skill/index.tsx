import { SectionHeader } from '@/components/global';
import Skills from './skills';

const Skill = () => {
    return (
        <div className='skill pb-4' id='skill'>
            <div className='container mx-auto px-4'>
                <SectionHeader title='Skills' image='./images/skills.jpg' />
                <Skills />
            </div>
        </div>
    );
};

export default Skill;
