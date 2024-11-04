import NavBar from './navbar';
import NavToggler from './nav-toggler';
import NavBrand from './nav-brand';

import '../../../style/header.scss';

function Header() {
    return (
        <nav className='header'>
            <NavToggler />
            <NavBrand />
            <NavBar />
        </nav>
    );
}

export default Header;
