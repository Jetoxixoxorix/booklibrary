import React, {Component} from 'react';

export class AddBook extends Component {
    render() {
        return (
            <div> 
                <h1>Add book:</h1>
                <form className='book-form'>
                    <label htmlFor='title'>Title:</label>
                    <input type='text' id='title' />
                    <label htmlFor='author'>Author:</label>
                    <input type='text' id='author'/>
                    <input type='submit' value='Add book'/>
                </form>
            </div>
        )
    }
}