import React, {Component} from 'react';
import importUsers from '../files/users.json';

export class RegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: importUsers.users,
            username: "",
            password: "",
            confirmPassword: "",
            formErrors: {
                username: "",
                password: ""
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    
    render () {
        return(
            <div> 
                <h1>Add book:</h1>
                <form className='register-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username:
                        <input 
                            type='text' 
                            id='username'
                            onChange={this.handleChange}
                            name='username'
                            value={this.state.username}
                        />
                    </label>
                    
                    <label htmlFor='password'>Password:
                        <input 
                            type='password' 
                            id='password'
                            onChange={this.handleChange}
                            name='password'
                            value={this.state.password}
                        />
                    </label>

                    <label htmlFor='confirm-password'>Confirm password:
                        <input 
                            type='password' 
                            id='confirm-password'
                            onChange={this.handleChange}
                            name='confirmPassword'
                            value={this.state.pages}
                        />
                    </label>
                    <input type='submit' value='Register'/>
                </form>
            </div>
        )
    }
}