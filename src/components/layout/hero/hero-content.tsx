import HeroImage from './hero-image';
import { ArrowsAnimation } from '@/assets/icons';
import HeroSocial from './hero-social';
import { FileUser } from 'lucide-react';

function HeroContent() {
    const wavy = 'Software Engineer'.split('').map((char) => (char === ' ' ? '\u00A0' : char));
    return (
        <div className='flex absolute bottom-3 width w-full h-[90%] pt-20 px-2 flex-col items-center'>
            <div>
                <HeroImage />
                <p className='text-white text-center pt-5 text-2xl'>
                    Hey, I'm <b> Benedicte Tuteka (Blessing Tutka)</b>
                </p>
                <p className='wave-text text-white text-center pt-5 text-2xl'>
                    <b>
                        {wavy.map((word) => (
                            <span className='fancy'>{word}</span>
                        ))}
                    </b>
                </p>
            </div>
            <HeroSocial />
            <div className='sm:absolute top-1/2 left-4 sm:transform sm:-translate-y-1/2 mt-4 sm:mt-0'>
                <a
                    href='https://www.canva.com/design/DAGiqx7WR6Y/0yZwDYoARWoN-I_b__X7eQ/edit?ui=eyJEIjp7IlQiOnsiQSI6IlBCU2Z3ajN6OFJ6TjVNR3EifX19'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={'my resume'}
                    className='cv text-gray-600 relative flex justify-center items-center h-16 w-16'
                >
                    <FileUser className='icon' />
                    <small className='title'>
                        <b>My Resume</b>
                    </small>
                </a>
            </div>
            <ArrowsAnimation />
        </div>
    );
}

export default HeroContent;
