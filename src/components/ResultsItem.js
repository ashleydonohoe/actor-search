import React from 'react';
import { Link } from 'react-router-dom';

export default({person}) => {
  const knownFor = person.known_for;
  const name = person.name;
  const imageURL = person.profile_path ? `https://image.tmdb.org/t/p/w320/${person.profile_path}` : 'http://via.placeholder.com/320x480?text=No%20Image%20Available';
  const knownForList = knownFor.map((item) => {
    const showName = item.original_name ? item.original_name : item.title;
    return (
      <li key={item.id}><span className="bold">{showName}</span> - {item.vote_average}/10</li>
    );
  });

  return (
  <div className="col-md-4 col-sm-6 text-center actor-cell" key={name}>
    <Link to={`/results/${person.id}`}><h3>{name}</h3></Link>
    <img src={imageURL} alt={name} className="img-thumbnail"/>
    <h5>Top Shows/Movies</h5>
    <ul>{knownForList}</ul>
  </div>
 );
}
