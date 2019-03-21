import React from 'react';
import {NavLink} from 'react-router-dom';

export const Book = props => {
    return (
        <NavLink to={`/book-details/${props.book.id}`}>
            <div className="book">
                <li>Title: {props.book.title}</li>
                <li>Author: {props.book.author}</li>
            </div>
        </NavLink>
    );
}
