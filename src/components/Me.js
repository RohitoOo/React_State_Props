import React, {Component} from 'react';
import SocialDetail from "./SocialDetail";
import Todo from './Todo.js';
class Me extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            filteredProfiles: this.props.userDetails.details || [],
            data: {props}

        }
    }

  

    render() {
        return (

          <Todo userDetails={this.props}/>

        )
    }
}

export default Me
