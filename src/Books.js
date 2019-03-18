import React, {Component} from 'react';
import importBooks from './files/books.json';
import {Book} from './Book';
import './books.css'

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
            <div className="books">
                <ul>
                    {allBooks}
                </ul>
            </div>
        );
    }
}

