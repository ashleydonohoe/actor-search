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
    const { name, birthday, biography, imdb_id, profile_path, homepage, place_of_birth} = this.props.results;
    const imdbURL = `http://www.imdb.com/name/${imdb_id}`;
    const imageURL = profile_path ? `https://image.tmdb.org/t/p/w640/${profile_path}` : 'http://via.placeholder.com/320x480?text=No%20Image%20Available';
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>{name}</h1>
            <hr/>
          </div>
          <div className="col-md-12">
            <Link to="/" className="btn-sm btn-primary pull-xs-left">Back to Results</Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img className="img-responsive big-image" src={imageURL}/>
            <h5>Quick Facts</h5>
            <ul className="text-center">
              <li><span className="bold">Birthday:</span> {birthday ? birthday : "Not available"}</li>
              <li><span className="bold">Place of Birth:</span> {place_of_birth ? place_of_birth : "Not available"}</li>
              <li><span className="bold">Homepage:</span> {homepage ? <a href={homepage}>Visit</a> : "Not available"}</li>
              <li><span className="bold">IMDB Page:</span> {imdb_id ? <a href={imdbURL}>Visit</a> : "Not available"}</li>
            </ul>
          </div>
        </div>
        <div className="row biography-section">
          <div className="col-offset-md-4">{biography}</div>
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
