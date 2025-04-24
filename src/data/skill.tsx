import { Monitor, Layout, Server, Network, FileText } from 'lucide-react';

export const skills = [
    {
        title: 'Software Development',
        subtitle: 'Experienced in both functional and OOP',
        tools: ['python', 'js', 'c++', 'typescript', 'prolog', 'antlr'],
        contentType: 'html',
        icon: <Monitor className='icon' />,
        gradient: 'magenta',
    },
    {
        title: 'Frontend Development',
        subtitle: 'Over 2 years of development experience in:',
        tools: ['html', 'css', 'react', 'tailwind'],
        contentType: 'react',
        icon: <Layout className='icon' />,
        gradient: 'blue',
    },
    {
        title: 'Backend Development',
        subtitle: 'Over 2 years of development experience in:',
        tools: ['python', 'django', 'express'],
        contentType: 'python',
        icon: <Server className='icon' />,
        gradient: 'green',
    },
    {
        title: 'API Development',
        subtitle: 'Over 2 years of API development experience using:',
        tools: ['django-rest', 'axios'],
        contentType: 'api',
        icon: <Network className='icon' />,
        gradient: 'yellow',
    },
    {
        title: 'WordPress Application',
        subtitle: `Over 1 years of development experience in wordpress with the knowledge of its best theme, 
        editor and plugin.Hence:`,
        tools: ['elementor', 'gutenberg'],
        contentType: 'wordpress',
        icon: <FileText className='icon' />,
        gradient: 'blue',
    },
];
