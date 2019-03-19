import React from 'react';

export const Books = props => {
    return (
        <div className="books">
            <ul>
                {props.allBooks}
            </ul>
        </div>
    );
}