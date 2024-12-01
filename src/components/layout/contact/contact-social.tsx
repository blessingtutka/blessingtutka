import React from 'react';
import { socialLinks } from '@/data';

const ConatctSocial: React.FC = () => (
    <div>
        <h3 className='font-semibold text-gray-300 mb-2'>Stay connected</h3>
        <ul className='flex space-x-4'>
            {socialLinks.map(({ url, icon, label }, i) => (
                <li key={i}>
                    <a
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        className={`social-icon-link w-3 h-3 text-gray-500 hover:text-[#008bff]`}
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
