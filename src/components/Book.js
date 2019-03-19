import React from 'react';
import {NavLink} from 'react-router-dom';

export const Book = props => {
    return (
        <div className="book">
            <li>Id: {props.book.id}</li>
            <li>Title: <NavLink to={`/book-details/${props.book.id}`}>{props.book.title}</NavLink></li>
            <li>Author: {props.book.author}</li>
        </div>
    );
}



   