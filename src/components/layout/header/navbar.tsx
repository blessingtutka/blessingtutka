import Nav from './nav';
import { useHeader } from '@/providers';

function NavBar() {
    const { click } = useHeader();

    return (
        <div className={`nav-bar${click ? ' mobile' : ''}`} id='nav-bar'>
            <Nav />
        </div>
    );
}

export default NavBar;
