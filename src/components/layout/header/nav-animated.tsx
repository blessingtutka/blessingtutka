import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeader } from '@/providers';

interface AnimatedNavProps {
    children: React.ReactNode;
}

const menuVars = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.42, 0, 0.58, 1], // ease-in-out
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.42, 0, 0.58, 1], // ease-in-out
        },
    },
};

const AnimatedNav: React.FC<AnimatedNavProps> = ({ children }) => {
    const { mobileNav, click } = useHeader();
    const className = `nav-bar ${click ? 'active' : ''}`;

    return mobileNav ? (
        <AnimatePresence>
            {click && (
                <motion.nav aria-expanded={click} className={className} variants={menuVars} initial='initial' animate='animate' exit='exit'>
                    <div className='flex flex-col w-full h-full justify-center items-center gap-4 z-[100]'>{children}</div>
                </motion.nav>
            )}
        </AnimatePresence>
    ) : (
        <nav className={className}>{children}</nav>
    );
};

export default AnimatedNav;
