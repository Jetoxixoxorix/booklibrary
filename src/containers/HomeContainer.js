import React, {Component} from 'react';

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    render() {
        return(
            <h1>Hello {this.state.user.username}</h1>
        )
    }
}