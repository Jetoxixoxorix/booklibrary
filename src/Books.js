import React, {Component} from 'react';
import importBooks from './files/books.json';
import {Book} from './Book';

export class Books extends Component {
    constructor() {
        super();
        this.state = {
            allBooks: importBooks.books
        }
    }

    render(){

        const allBooks = this.state.allBooks.map(book => <Book book={book} key={book.id}></Book>)

        return (
            <div>
                <h1>Books rental</h1>
                <h2>Books:</h2>
                <ul>
                    {allBooks}
                </ul>
            </div>
        );
    }
}

