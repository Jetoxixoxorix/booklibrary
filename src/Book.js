import React from 'react';

export const Book = (props) => {
    return (
        <div className="book">
            <li>Id: {props.book.id}</li>
            <li>Title: {props.book.title}</li>
            <li>Author: {props.book.author}</li>
        </div>
    );
}



   