import { skills } from '@/data';
import SkillQuote from './skill-quote';

const Skills = () => {
    return (
        <div className='skills-container w-full flex flex-wrap gap-2'>
            {skills.map((skill) => {
                return (
                    <div key={skill.title} className={`w-full md:w-[49%] mlg:w-[32%]`}>
                        <div className={`skill-box h-full w-full flex flex-col ${skill.gradient}`}>
                            <div className='skill-header flex items-center gap-3'>
                                <div className='skill-icon'>{skill.icon}</div>
                                <h5 className={skill.gradient}>
                                    <span>{skill.title.split(' ')[0]}</span>
                                    <br />
                                    {skill.title.split(' ')[1]}
                                </h5>
                            </div>
                            <div className='skill-content'>
                                <div className={'content flex flex-col ' + skill.contentType}>
                                    <p>{skill.subtitle}</p>
                                    <div className='tools flex flex-wrap gap-2'>
                                        {skill.tools.map((tool) => (
                                            <img key={tool} src={`images/svg/${tool}.svg`} alt={tool} className='tool-icon' />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <SkillQuote />
        </div>
    );
};

export default Skills;
