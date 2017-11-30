import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ShowDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchActorInfo(id);
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Details Show</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowDetails;
