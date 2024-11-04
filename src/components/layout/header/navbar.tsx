import Nav from './nav';
import NavContact from './nav-contact';

function NavBar() {
    return (
        <div className='nav-bar' id='nav-bar'>
            <Nav />
            <NavContact />
        </div>
    );
}

export default NavBar;
