import { socialLinks } from './social-links';
import { File, AtSign, Briefcase, Edit } from 'lucide-react';
import { z } from 'zod';

export const contactInfo = {
    services: ['Websites', 'Wordpress', 'Baas', 'SEO'],
    contactSocial: socialLinks,
    contactMe: {
        about: 'Blessing is a Backend web developer. Feel free to get in touch with me.',
        email: 'blessingtutka298@gmail.com',
        phone: '472-763-020',
    },
    freelanceAvailability: "I'm available for freelance projects",
};

export const contactFormSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters long.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    services: z.array(z.string()).nonempty({
        message: 'Please select at least one service.',
    }),
    message: z.string().min(10, {
        message: 'Message must be at least 10 characters long.',
    }),
});

export const contactSteps = [
    { label: 'Name', icon: <File className='icon' /> },
    { label: 'Email', icon: <AtSign className='icon' /> },
    { label: 'Service', icon: <Briefcase className='icon' /> },
    { label: 'Message', icon: <Edit className='icon' /> },
];
