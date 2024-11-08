import NavBar from './navbar';
import NavToggler from './nav-toggler';
import NavBrand from './nav-brand';
import NavContact from './nav-contact';
import { HeaderContextProvider } from '@/providers';

import '../../../style/header.scss';

function Header() {
    return (
        <HeaderContextProvider>
            <nav className='header'>
                <NavToggler />
                <NavBrand />
                <NavBar />
                <NavContact />
            </nav>
        </HeaderContextProvider>
    );
}

export default Header;
