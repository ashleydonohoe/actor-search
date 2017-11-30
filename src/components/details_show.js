import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchActorInfo } from '../actions/index';

class ShowDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchActorInfo(id).then(() => {
      console.log(this.props.results);
    });
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

function mapStateToProps({ results }) {
  return {
    results
  }
};

export default connect(mapStateToProps, {fetchActorInfo})(ShowDetails);
