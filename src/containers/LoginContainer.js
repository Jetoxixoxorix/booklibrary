import React, {Component} from 'react';
import importUsers from '../files/users.json';
import {Login} from '../components/Login';

const findUser = (user) => {
    console.log(user);
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

       findUser(user) ? this.props.history.push("/") : alert("No such user"); 
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>;
    }
}
