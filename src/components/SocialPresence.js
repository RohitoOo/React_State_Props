import React, {Component} from 'react';
import SocialDetail from './SocialDetail.js';



class SocialPresence extends Component {

  constructor(props) {
      super(props);

      this.state = {
        data: {props},
        filter: '',
        filteredProfiles: this.props.details || [],

      };
  }

  render() {

    return (
        <div className="container-fluid">
            <h1>My Social Presence</h1>
            {/*// TODO: create provider filter */}
            <input className="form-control" type="text" value={this.state.filter}
                   placeholder="personal/professional" onChange={(e) => this.handleFilterChange(e)}/>
            <button className="btn btn-outline-primary" onClick={this.changeFilteredProfiles}>Search</button>
                <SocialDetail socialDetail={this.state}/>
            <ul className="list-group">
                {this.state.filteredProfiles.map(detail =>
                    <li key={detail.id} className="list-group-item">

                    </li>
                )}
            </ul>
        </div>
    )



}}


export default SocialPresence
