import { useHeader } from '@/providers';

function NavToggler() {
    const { click, handleClick } = useHeader();

    return (
        <button
            className='nav-toggler'
            type='button'
            onClick={handleClick}
            data-bs-toggle='collapse'
            data-bs-target='#nav-bar'
            aria-controls='nav-bar'
            aria-expanded={click}
            aria-label='Toggle navigation'
        >
            <span className='nav-toggler-icon'></span>
        </button>
    );
}

export default NavToggler;
