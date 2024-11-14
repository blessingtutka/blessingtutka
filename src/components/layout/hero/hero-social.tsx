import { socialLinks } from '@/data';

function HeroSocial() {
    return (
        <ul className='sm:absolute top-1/2 right-4 sm:transform sm:-translate-y-1/2 flex flex-row sm:flex-col space-x-3 sm:space-x-0 mt-4 sm:mt-0 sm:space-y-4'>
            {socialLinks.map((socialLink, index) => (
                <li key={index} className='flex items-center justify-center sm:space-x-2'>
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
