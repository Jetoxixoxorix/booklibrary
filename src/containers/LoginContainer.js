import React, {Component} from 'react';

export class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <label htmlFor="username">Username:
                    <input 
                        type="text"
                        id="username"
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        type="password"
                        id="password"
                    />
                </label>
            </div>
        )
    }
}
