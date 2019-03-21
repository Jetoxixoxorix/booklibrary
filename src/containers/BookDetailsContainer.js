import React, {Component} from 'react';
import importBooks from '../files/books.json';
import {BookDetails} from '../components/BookDetails';

const findBook = (id) => {
    return importBooks.books.find(book => book.id == id);
}

export class BookDetailsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            book: ""
        }
    }

    componentDidMount() {
        const chosenBook = findBook(this.props.match.params.id);
  
        this.setState({
            book: chosenBook
        })
    }

    render(){
        return(
            <BookDetails book={this.state.book}/>
        )
    }
}

