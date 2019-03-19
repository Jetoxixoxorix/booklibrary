import React, {Component} from 'react';
import importBooks from '../files/books.json';
import {Book} from '../components/Book';
import '../styles/books.css';
import {Books} from '../components/Books';

export class BooksContainer extends Component {
    constructor() {
        super();
        this.state = {
            allBooks: []
        }
    }

    componentDidMount() {
        this.setState({
            allBooks: importBooks.books
        })
    }

    render(){
        const allBooks = this.state.allBooks.map(book => <Book book={book} key={book.id}></Book>)
        
        return (
            <Books allBooks={allBooks}/>
        )
    }
}
