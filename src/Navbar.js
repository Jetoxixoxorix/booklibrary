import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <ul className="menu menu-left">
                        <li>Home</li>
                        <li><NavLink to="books">Books</NavLink></li>
                        <li>Add book</li>
                    </ul>
                    <ul className="menu menu-right">
                        <li>Register</li>
                        <li>Log in</li>
                    </ul>
            </nav>
        );
    }
}