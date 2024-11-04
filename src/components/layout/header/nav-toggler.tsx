import { useState } from 'react';

function NavToggler() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <button
            className='nav-toggler'
            type='button'
            onClick={handleToggle}
            data-bs-toggle='collapse'
            data-bs-target='#nav-bar'
            aria-controls='nav-bar'
            aria-expanded={isExpanded}
            aria-label='Toggle navigation'
        >
            <span className='nav-toggler-icon'></span>
        </button>
    );
}

export default NavToggler;
