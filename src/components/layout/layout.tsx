import Header from './header';
import Hero from './hero';
import About from './about';
import Project from './project';
import Skill from './skill';
import Contact from './contact';
import { Toaster } from '@/components/ui/toaster';

import '../../style/layout.scss';

function Layout() {
    return (
        <div className='layout relative'>
            <Header />
            <Hero />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Toaster />
        </div>
    );
}

export default Layout;
