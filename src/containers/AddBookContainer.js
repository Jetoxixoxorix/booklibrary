import React, {Component} from 'react';
import '../styles/addbook.css';
import {AddBook} from '../components/AddBook';

const data = require('../files/books.json');

const formValid = (state) => {
    let valid = true;
    
    Object.values(state).forEach(value => {
        value.length === 0 && (valid = false);
    });

    return valid;
}

export class AddBookContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            pages: "",
            photo: ""
        }
    }

    saveBook = book => {
        data.books.push(book);
    }

    idSequence = () => {
       const length = data.books.length;
       const lastId = data.books[length - 1].id;
       const newId = lastId + 1;

       return newId;
    }

    handleSubmit = event => {
        event.preventDefault();
        if(formValid(this.state)) {
            const book = {
                id: this.idSequence(),
                title: this.state.title,
                author: this.state.author,
                pages: this.state.pages,
                photo: this.state.photo
            }
            this.saveBook(book);
        }
        else {
            alert("There are empty form items!");
        }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        // return(
        //     <AddBook handleSubmit={this.handleSubmit} handleChange={this.handleChange} newBook={this.state}/>
        // )
        return (
            <div>
                <div> 
                    <h1>Add book:</h1>
                    <form className='book-form' onSubmit={this.handleSubmit}>
                        <label htmlFor='title'>Title:</label>
                        <input 
                            type='text' 
                            id='title'
                            onChange={this.handleChange}
                            name='title'
                            value={this.state.title}
                        />
                        <label htmlFor='author'>Author:</label>
                        <input 
                            type='text' 
                            id='author'
                            onChange={this.handleChange}
                            name='author'
                            value={this.state.author}
                        />
                        <label htmlFor='pages'>Pages:</label>
                        <input 
                            type='number' 
                            id='pages'
                            onChange={this.handleChange}
                            name='pages'
                            value={this.state.pages}
                        />
                        <label htmlFor='photo'>Photo:</label>
                        <input 
                            type='text' 
                            id='photo'
                            onChange={this.handleChange}
                            name='photo'
                            value={this.state.photo}
                        />
                        <input type='submit' value='Add book'/>
                    </form>
                </div>
                <div> 
                    <h1>Book:</h1>
                    <form>
                        <p>Title: {this.state.title}</p>
                        <p>Author: {this.state.author}</p>
                        <p>Pages: {this.state.pages}</p>
                        <p>Photo: </p>
                        <img src={this.state.photo} alt=""/>
                    </form>
                </div>
             </div>
        )
    }
}
