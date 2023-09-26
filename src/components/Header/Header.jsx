import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt='' />
            </div>
            <div>
                <a href='/order'>Order</a>
                <a href='/orderReview'>Order Review</a>
                <a href='/manageInventory'>Manage Inventory</a>
                <a href='/login'>Login</a>
            </div>
        </nav>
    );
};

export default Header;