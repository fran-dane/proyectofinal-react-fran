import React from 'react'
import estiloNavBar from './navBar.css'

export const NavBar = () => {
    return (
        <div className='container'>
            <nav className='nav'>
                <div className="nav__brand">
                    <a href="#" id='title__rosean' className="nav__link">Rosean</a>
                </div>
                <ul className="nav__list">
                    <li>
                        <a href="#" className="nav__link">Home</a>
                    </li>
                    <li>
                        <a href="#" className="nav__link">Products</a>
                    </li>
                    <li>
                        <a href="#" id='carrito' className="nav__link">
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;