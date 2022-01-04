import React from 'react';

const Menu = () => {
    return (
        <nav  aria-label="breadcrumb">
            <ul className="breadcrumb">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
            </ul>
        </nav>
    )
}

export default Menu