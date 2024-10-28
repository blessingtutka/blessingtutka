import '../../../style/hero-moon.scss';

function HeroImage() {
    return (
        <div className='moon hero-image w-full lg:w-5/12 relative z-10'>
            <img src='/images/hero.png' className='hero-image-wrap  img-fluid' alt='' />
            <div className='star-1'></div>
            <div className='star-2'></div>
        </div>
    );
}

export default HeroImage;
