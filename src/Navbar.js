import React from 'react';
import incognito from './Pictures/incognito.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
<nav className='navbar'>
        <div className='navbar__container'>
        <Link to='/' className='navbar__container'>
            <h1 className='navbar__items'>MangaIncognito</h1>
            <img
            className='navbar__items'
            height='60'
            src={incognito}
            alt='' />
            </Link>

       
        </div>
</nav>
    )
}

export default Navbar
