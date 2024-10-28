import HeroImage from './hero-image';
import { ArrowsAnimation } from '@/assets/icons';

function HeroContent() {
    return (
        <div className='flex h-[90%] pt-20 px-2 flex-col items-center'>
            <div>
                <HeroImage />
                <p className='text-white text-center pt-5 text-2xl'>
                    Hey, I'm <b> Benedicte Tuteka (Blessing Tutka)</b>
                </p>
            </div>
            <ArrowsAnimation />
        </div>
    );
}

export default HeroContent;
