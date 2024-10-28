import '../../../style/hero-background.scss';

const NightSky = () => {
    return (
        <div className='night overflow-hidden'>
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className='shooting_star' />
            ))}
        </div>
    );
};

export default NightSky;
