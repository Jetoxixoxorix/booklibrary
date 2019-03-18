import React, {Component} from 'react';

export class AddBook extends Component {
    render() {
        return (
            <div> 
                <h1>Add book:</h1>
                <form className='book-form'>
                    <label for='title'>Title:</label>
                    <input type='text' id='title' />
                    <label for='author'>Author:</label>
                    <input type='text' id='author'/>
                </form>
            </div>
        )
    }
}