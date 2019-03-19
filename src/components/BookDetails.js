import React, {Component} from 'react';
import importBooks from '../files/books.json';

export class BookDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            book: ""
        }
    }

    componentDidMount() {
        
        const bookaa = importBooks.books.filter(b => {
            if(b.id == this.props.match.params.id){
                return b;
            }
        })

        this.setState({
            book: bookaa[0]
        })
    }

    render(){
        return(
            <div className="book">
                <li>{this.state.book.id}</li>
                <li>{this.state.book.title}</li>
                <li>{this.state.book.author}</li>
                <li>{this.state.book.pages}</li>
            </div>
        )
    }
}

// export const BookDetails = props => {
//     return(
//         <div>{props}</div>
//     );
// }
