import { navLinks } from '@/data';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <ul className='nav'>
            {navLinks.map((navLink, index) => (
                <li className='nav-item' key={index}>
                    <Link className={`nav-link ${index == 0 ? 'active' : ''}`} to='/'>
                        {navLink.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Nav;
