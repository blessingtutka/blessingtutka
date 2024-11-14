import HeroImage from './hero-image';
import { ArrowsAnimation } from '@/assets/icons';
import HeroSocial from './hero-social';
// import { Link } from 'react-router-dom';

function HeroContent() {
    return (
        <div className='flex absolute bottom-3 width w-full h-[90%] pt-20 px-2 flex-col items-center'>
            <div>
                <HeroImage />
                <p className='text-white text-center pt-5 text-2xl'>
                    Hey, I'm <b> Benedicte Tuteka (Blessing Tutka)</b>
                </p>
                <p className='fancy text-white text-center pt-5 text-2xl'>
                    <b>Sofware Engineer</b>
                </p>
            </div>
            <HeroSocial />
            <ArrowsAnimation />
        </div>
    );
}

export default HeroContent;
