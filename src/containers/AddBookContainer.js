import React, {Component} from 'react';
import '../styles/addbook.css';

export class AddBookContainer extends Component {
    constructor() {
        super();
        this.state = {
            newBook: {
                id: 0,
                title: "",
                author: "",
                pages: "",
                photo: ""
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState( {
            [name]: value
        })
    }


    render() {
        return (
            <div>
                <div> 
                    <h1>Add book:</h1>
                    <form className='book-form'>
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
                            type='text' 
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
                    <form className='book-form'>
                        <p>Title: {this.state.title}</p>
                        <p>Author: {this.state.author}</p>
                        <p>Pages: {this.state.pages}</p>
                        <p>Photo: {this.state.photo}</p>
                    </form>
                </div>
             </div>
        )
    }
}