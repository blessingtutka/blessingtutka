import React from 'react';
import { socialLinks } from '@/data';

const ConatctSocial: React.FC = () => (
    <div className='contact-social'>
        <h3 className='font-semibold text-gray-300 mb-2'>Stay connected</h3>
        <ul className='flex space-x-4'>
            {socialLinks.map(({ url, icon, label }, i) => (
                <li key={i}>
                    <a
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        className={`social-icon-link w-5 h-5 text-gray-500 rounded-full border border-gray-500 overflow-hidden`}
                        aria-label={label}
                    >
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default ConatctSocial;
