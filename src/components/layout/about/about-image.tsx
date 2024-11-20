function AboutImage({ src }: { src: string }) {
    return <img src={src} alt='about-me' className='rounded-lg shadow-md w-full h-[500px] object-cover' />;
}

export default AboutImage;
