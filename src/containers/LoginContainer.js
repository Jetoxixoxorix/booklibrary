import React, {Component} from 'react';
import importUsers from '../files/users.json';

const findUser = (user) => {
    return importUsers.users.find(u =>  u.username === user.username && u.password === user.password);
}

export class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            users: []
        }
    }

    componentDidMount() {
        const allUsers = importUsers.users;
        this.setState({
            users: allUsers
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = {
           username: this.state.username,
           password: this.state.password
        }

        return !findUser(user) && alert("No such user");
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="username">Username:
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label htmlFor="password">Password:
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Log in" />
                </form>
            </div>
        )
    }
}
