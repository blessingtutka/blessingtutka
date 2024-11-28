import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { useHeader } from '@/providers';

const mobileLinkVars = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

interface NavLinkProps {
    title: string;
    name: string;
    href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href, name }) => {
    const { mobileNav, click, activeSection } = useHeader();
    const isActive = activeSection == name;

    const className = `nav-link ${isActive ? 'active' : ''}`.trim();

    return mobileNav ? (
        <AnimatePresence>
            {click && (
                <motion.li key={href} variants={mobileLinkVars} initial='initial' animate='open' exit='exit' className={className}>
                    <HashLink smooth to={href}>
                        {title}
                    </HashLink>
                </motion.li>
            )}
        </AnimatePresence>
    ) : (
        <HashLink smooth to={href} className={className} data-active={isActive}>
            {title}
        </HashLink>
    );
};

export default NavLink;
