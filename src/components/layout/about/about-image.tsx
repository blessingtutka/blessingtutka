function AboutImage({ src1, src2 }: { src1: string; src2: string }) {
    return (
        <div className='gallery rounded-lg over shadow-md h-[450px]'>
            <img src={src2} alt='more-about-me' className='w-full h-full object-cover' />;
            <img src={src1} alt='about-me' className='w-full h-full object-cover' />;
        </div>
    );
}

export default AboutImage;
