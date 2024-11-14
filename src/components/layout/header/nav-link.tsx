import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {
    const { mobileNav, click } = useHeader();
    const location = useLocation();
    const pathname = location.pathname || '/';
    const isActive = href === pathname;

    const className = `nav-link ${isActive ? 'active' : ''}`.trim();

    return mobileNav ? (
        <AnimatePresence>
            {click && (
                <motion.li key={href} variants={mobileLinkVars} initial='initial' animate='open' exit='exit' className={className}>
                    <Link to={href}>{title}</Link>
                </motion.li>
            )}
        </AnimatePresence>
    ) : (
        <Link to={href} className={className} data-active={isActive}>
            {title}
        </Link>
    );
};

export default NavLink;
