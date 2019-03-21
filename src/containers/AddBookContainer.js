import React, {Component} from 'react';
import '../styles/addbook.css';

const data = require('../files/books.json');

const formValidation = ({formErrors, ...restOfState}) => {
    let valid = true;
    
    Object.values(restOfState).forEach(value => {
        value.length === 0 && (valid = false);
    });

    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false);
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
            photo: "",
            formErrors:{
                title: "",
                author: "",
                pages: "",
                photo: ""
            }
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
        if(formValidation(this.state)) {
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
            alert("Correct form!");
        }
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target;
        let formErrors = {...this.state.formErrors};

        switch(name) {
            case('title'):
                formErrors.title = value.length < 2 ? "too short" : "";
                break;
            case('author'):
                formErrors.author = value.length < 3 ? "too short" : "";
                break;
            case('pages'):
                formErrors.pages = value < 1 ? "number of pages should be bigger than 0" : "";
                break;
            case('photo'):
                formErrors.photo = value.length < 5 ? "provide correct address" : "";
                break;
            default:
                break;
        }

        this.setState({
            formErrors,
            [name]: value
        })
    }

    render() {
        const {formErrors} = this.state;
        
        return (
            <div>
                <div> 
                    <h1>Add book:</h1>
                    <form className='book-form' onSubmit={this.handleSubmit}>
                        <label htmlFor='title'>Title:
                            <input 
                                type='text' 
                                id='title'
                                onChange={this.handleChange}
                                name='title'
                                value={this.state.title}
                            />
                        </label>
                        {formErrors.title.length > 0 && <span className='error-message'>{formErrors.title}</span>}
                        
                        <label htmlFor='author'>Author:
                            <input 
                                type='text' 
                                id='author'
                                onChange={this.handleChange}
                                name='author'
                                value={this.state.author}
                            />
                        </label>
                        {formErrors.author.length > 0 && <span className='error-message'>{formErrors.author}</span>}

                        <label htmlFor='pages'>Pages:
                            <input 
                                type='number' 
                                id='pages'
                                onChange={this.handleChange}
                                name='pages'
                                value={this.state.pages}
                            />
                        </label>
                        {formErrors.pages.length > 0 && <span className='error-message'>{formErrors.pages}</span>}

                        <label htmlFor='photo'>Photo:
                            <input 
                                type='text' 
                                id='photo'
                                onChange={this.handleChange}
                                name='photo'
                                value={this.state.photo}
                            />
                        </label>
                        {formErrors.photo.length > 0 && <span className='error-message'>{formErrors.photo}</span>}

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
