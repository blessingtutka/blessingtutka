import { useContext, useState, useEffect, createContext, FC, ReactNode } from 'react';
import { navLinks } from '@/data';

interface HeaderContentType {
    click: boolean;
    activeSection: string;
    handleClick: () => void;
    mobileNav: boolean;
}

interface HeaderContextProviderProps {
    children: ReactNode;
}

const HeaderContext = createContext<HeaderContentType | undefined>(undefined);

const useHeader = () => {
    const context = useContext(HeaderContext);
    if (context === undefined) {
        throw new Error('useHeader must be used within a HeaderContextProvider');
    }
    return context;
};

const HeaderContextProvider: FC<HeaderContextProviderProps> = ({ children }) => {
    const [click, setClick] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const handleClick = () => setClick(!click);
    const [activeSection, setActiveSection] = useState('home');
    const headerContent: HeaderContentType = {
        click,
        handleClick,
        activeSection,
        mobileNav,
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            navLinks.forEach((section) => {
                const element = document.getElementById(section.name);
                if (element) {
                    const offsetTop = element.offsetTop;
                    console.log(offsetTop, element.offsetHeight);
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + element.offsetHeight) {
                        setActiveSection(section.name);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setClick(false);
                setMobileNav(false);
            } else {
                setMobileNav(true);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const headerElement = document.getElementById('header');
            if (headerElement && !headerElement.contains(event.target as Node)) {
                setClick(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <HeaderContext.Provider value={headerContent}>{children}</HeaderContext.Provider>;
};

export default HeaderContextProvider;
export { HeaderContext, useHeader };
