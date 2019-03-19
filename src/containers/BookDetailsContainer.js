import React, {Component} from 'react';
import importBooks from '../files/books.json';
import {BookDetails} from '../components/BookDetails';

export class BookDetailsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            book: ""
        }
    }

    componentDidMount() {
        const chosenBook = importBooks.books.filter(b => {
            if(b.id == this.props.match.params.id){
                return b;
            }
        })

        this.setState({
            book: chosenBook[0]
        })
    }

    render(){
        return(
            <BookDetails book={this.state.book}/>
        )
    }
}

