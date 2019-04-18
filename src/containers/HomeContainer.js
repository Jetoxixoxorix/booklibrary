import React, { Component } from 'react';

import axios from 'axios';

export const testingAxios = () => {

    const users = axios.get("https://jsonplaceholder.typicode.com/users/")
                            .then(response =>  response.data)
        
    return users;
}

//sprobowac do component did mount jak w przykladzie z alligatora i zobaczyc cyz to dziala
export class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            users: []
        }
    }

    handleClick = async () => {
        const axios = await testingAxios();
        console.log(axios);
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.user.username}</h1>
                <input type="submit" onClick={this.handleClick} value="elo"/>
            </div>
        )
    }
}