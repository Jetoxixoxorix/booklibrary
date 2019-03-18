import React from 'react';

export const Book = (props) => {
    console.log(props);
    return (
        <div>
            <li>{props.book.id}</li>
            <li>{props.book.title}</li>
            <li>{props.book.author}</li>
        </div>
    );
}




   