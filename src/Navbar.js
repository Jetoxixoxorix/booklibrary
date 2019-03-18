import React, {Component} from 'react';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Books</li>
                        <li>Add book</li>
                    </ul>
                    <ul>
                        <li>Register</li>
                        <li>Log in</li>
                    </ul>
                </div>
            </div>
        );
    }
}