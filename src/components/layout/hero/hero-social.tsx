import { socialLinks } from '@/data';

function HeroSocial() {
    return (
        <ul className='absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col space-y-4'>
            {socialLinks.map((socialLink, index) => (
                <li key={index} className='flex items-center space-x-2'>
                    <a
                        href={socialLink.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={socialLink.label}
                        className='text-gray-600 hover:text-white transition-colors'
                    >
                        {socialLink.icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default HeroSocial;
