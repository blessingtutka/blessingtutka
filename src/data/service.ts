import { Globe, FileText, Monitor, Search } from 'lucide-react';

interface Service {
    title: string;
    description: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    linkText: string;
}

const services: Service[] = [
    {
        title: 'Websites',
        description: 'You may want a simple information website; personal or business, feel free to contact me.',
        Icon: Globe,
        linkText: 'Discover More',
    },
    {
        title: 'Wordpress',
        description: 'If you need a customized business or personal wordpress website, feel free to discuss with me.',
        Icon: FileText,
        linkText: 'Discover More',
    },
    {
        title: 'BaaS',
        description:
            'If you need a customized ecommerce, system management website, or available API for your business, feel free to discuss with me.',
        Icon: Monitor,
        linkText: 'Discover More',
    },
    {
        title: 'SEO',
        description: 'To list your website first on any search engine, we will work together.',
        Icon: Search,
        linkText: 'Discover More',
    },
];

export { services };
