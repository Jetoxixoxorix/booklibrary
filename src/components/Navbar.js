import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className="menu menu-left">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/add-book">Add book</NavLink></li>
            </ul>
            <ul className="menu menu-right">
                <li>Register</li>
                <li><NavLink to="/login">Log in</NavLink></li>
            </ul>
        </nav>
    );
}
