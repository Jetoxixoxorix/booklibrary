import React from 'react'

export const AddBook = props => {
    return (
        <div>
            <div> 
                <h1>Add book:</h1>
                <form className='book-form' onSubmit={props.handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input 
                        type='text' 
                        id='title'
                        onChange={props.handleChange}
                        name='title'
                        value={props.title}
                    />
                    <label htmlFor='author'>Author:</label>
                    <input 
                        type='text' 
                        id='author'
                        onChange={props.handleChange}
                        name='author'
                        value={props.author}
                    />
                    <label htmlFor='pages'>Pages:</label>
                    <input 
                        type='number' 
                        id='pages'
                        onChange={props.handleChange}
                        name='pages'
                        value={props.pages}
                    />
                    <label htmlFor='photo'>Photo:</label>
                    <input 
                        type='text' 
                        id='photo'
                        onChange={props.handleChange}
                        name='photo'
                        value={props.photo}
                    />
                    <input type='submit' value='Add book'/>
                </form>
            </div>
            <div> 
                <h1>Book:</h1>
                <form>
                    <p>Title: {props.title}</p>
                    <p>Author: {props.author}</p>
                    <p>Pages: {props.pages}</p>
                    <p>Photo: </p>
                    <img src={props.photo} alt=""/>
                </form>
            </div>
         </div>
    )
}
