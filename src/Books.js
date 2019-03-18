import React, {Component} from 'react';
import importBooks from './files/books.json';

export class Books extends Component {
    constructor() {
        super();
        this.state = {
            allBooks: importBooks.books
        }
    }

    render(){
        const allBooks = this.state.allBooks.map(book => 
            <div>
              <li>{book.id}</li>
                <li>{book.name}</li>
                <li>{book.author}</li>   
            </div>

        )

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

