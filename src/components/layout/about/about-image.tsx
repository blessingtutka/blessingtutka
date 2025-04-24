function AboutImage({ src1, src2 }: { src1: string; src2: string }) {
    return (
        <div className='gallery rounded-lg overflow-hidden shadow-md h-[250] md:h-[450px]'>
            <img src={src2} alt='more-about-me' className='w-full h-full object-cover bg-[#0C223D]' />
            <img src={src1} alt='about-me' className='w-full h-full object-cover' />
        </div>
    );
}

export default AboutImage;
