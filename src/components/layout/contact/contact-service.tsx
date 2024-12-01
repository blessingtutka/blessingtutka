import React from 'react';

interface ContactServiceProps {
    items: string[];
}

const ContactService: React.FC<ContactServiceProps> = ({ items }) => (
    <div>
        <h3 className='font-semibold text-gray-300 mb-2'>Services</h3>
        <ul className='space-y-2'>
            {items.map((item) => (
                <li key={item} className='contact-service inline-block'>
                    <a href='#' className='contact-service-link'>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default ContactService;
