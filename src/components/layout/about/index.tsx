import AboutContent from './about-content';
import AboutHeader from './about-header';
import AboutImage from './about-image';
import { about } from '@/data';

function About() {
    const { title, subtitle, avatar, image, image2, content } = about;
    return (
        <section className='about mt-10' id='about'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 p-4'>
                        <AboutImage src1={image} src2={image2} />
                    </div>

                    <div className='w-full lg:w-1/2 p-4'>
                        <div className='flex gap-y-4 flex-col'>
                            <AboutHeader title={title} avatar={avatar} />
                            <AboutContent content={content} subtitle={subtitle} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
