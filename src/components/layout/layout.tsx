import Header from './header';
import Hero from './hero';
import About from './about';
import Project from './project';
import Skill from './skill';

import '../../style/layout.scss';

function Layout() {
    return (
        <div className='layout relative'>
            <Header />
            <Hero />
            <About />
            <Skill />
            <Project />
        </div>
    );
}

export default Layout;
