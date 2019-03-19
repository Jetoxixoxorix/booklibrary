import React, {Component} from 'react';
import importBooks from '../files/books.json';
import {Book} from '../Book';
import '../books.css';
import {Books} from '../components/Books';

export class BooksContainer extends Component {
    constructor() {
        super();
        this.state = {
            allBooks: []
        }

        //this.allBooks = this.allBooks.bind(this);
    }

    componentDidMount() {
        this.setState({
            allBooks: importBooks.books
        })
    }

  //  allBooks() {
    //    return this.state.allBooks.map(book => <Book book={book} key={book.id}></Book>);
    //}

    render(){
        const allBooks = this.state.allBooks.map(book => <Book book={book} key={book.id}></Book>)
        
        return (
            <Books allBooks={allBooks}/>
        )
    }
}
