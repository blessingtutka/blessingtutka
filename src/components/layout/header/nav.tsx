import { navLinks } from '@/data';
import NavLink from './nav-link';

function Nav() {
    return (
        <ul className='nav'>
            {navLinks.map((navLink, index) => (
                <NavLink key={index} title={navLink.label} href={navLink.link} name={navLink.name} />
            ))}
        </ul>
    );
}

export default Nav;
