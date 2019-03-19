import React from 'react';

export const BookDetails = (props) => {
    return(
        <div className="book-details">
            <p>Id: {props.book.id}</p>
            <p>Title: {props.book.title}</p>
            <p>Author: {props.book.author}</p>
            <p>Number of pages: {props.book.pages}</p>
        </div>
    )
}
