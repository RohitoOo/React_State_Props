import React, {Component} from 'react';
import SocialPresence from "./SocialPresence";


class Todo extends Component {

  constructor(props) {
      super(props);

      this.state = {
          data: {props},
          filter: '',
          filteredProfiles: this.props.details || []
      };
  }
  handleFilterChange = (event) => {
      let value = event.target.value;
      this.setState(currentState => {
          return {filter: value}
      });
  };

  filterSocialDetailsByEngagement = ({details: userDetails}) => {
      let filteredProfiles = userDetails.filter((profile) => {
          return profile.engagement.includes(this.state.filter)
      });

      if (filteredProfiles.length === 0) filteredProfiles = [...userDetails];
      return filteredProfiles;
  };

  changeFilteredProfiles = () => {
      this.setState((currentState, currentProps) => {
          return {filteredProfiles: this.filterSocialDetailsByEngagement(currentProps.userDetails)}
      })
  };

render() {

  return (
    <div>
        {/*// TODO: refactor
            implement more fuzzy filters
        */}
        <header className="jumbotron">
            <img src={this.props.userDetails.image} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome {this.props.userDetails.firstName}
                {this.props.userDetails.lastName}</h1>
        </header>

        <SocialPresence   SocialPresence={this.state.data}  />



    </div>
  )
}}

export default Todo
