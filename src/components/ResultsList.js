import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsList extends Component {
  renderResults(results) {
    const name = results[0].name;
    const imageURL = `https://image.tmdb.org/t/p/w640/${results[0].profile_path}`;
    const knownFor = results[0].known_for;
    console.log(knownFor);
    return (
    <div className="col-md-4 col-sm-6 text-center actor-cell" key={name}>
      <h3>{name}</h3>
      <img src={imageURL} alt={name} className="img-thumbnail"/>
      <h4>Top Three Shows/Movies</h4>
      <ul>
        <li>{knownFor[0].original_title} - {knownFor[0].vote_average}/10</li>
        <li>{knownFor[1].original_title} - {knownFor[1].vote_average}/10</li>
        <li>{knownFor[2].original_title} - {knownFor[2].vote_average}/10</li>
      </ul>
    </div>
    )
  }

  render() {
    return (
      <div className="row">
        {this.props.results.map(this.renderResults)}
      </div>
    );
  }
}

function mapStateToProps({results}) {
  return {
    results
  };
}

export default connect(mapStateToProps)(ResultsList);
