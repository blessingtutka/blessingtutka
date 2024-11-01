import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
function NavContact() {
    return (
        <div className='nav-contact d-flex align-items-center d-lg-none'>
            <PhoneCall className='nav-icon ml-3' />
            <Link className='nav-btn' to='/#about'>
                +32472763020
            </Link>
        </div>
    );
}

export default NavContact;
