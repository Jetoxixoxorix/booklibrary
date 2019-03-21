import React from 'react';

export const Login = props => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Username:
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        onChange={props.handleChange}
                    />
                </label>
                <label htmlFor="password">Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={props.handleChange}
                    />
                </label>
                <input type="submit" value="Log in" />
            </form>
        </div>
    )
}