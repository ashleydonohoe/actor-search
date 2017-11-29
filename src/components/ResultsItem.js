import React from 'react';

export default({person}) => {
  const knownFor = person.known_for;
  const name = person.name;
  const imageURL = person.profile_path ? `https://image.tmdb.org/t/p/w320/${person.profile_path}` : 'http://via.placeholder.com/320x480?text=No%20Image%20Available';
  const knownForList = knownFor.map((item) => {
    return (
      <li key={item.id}>{item.title} - {item.vote_average}/10</li>
    );
  });
  console.log(knownForList);
  return (
  <div className="col-md-4 col-sm-6 text-center actor-cell" key={name}>
    <h3>{name}</h3>
    <img src={imageURL} alt={name} className="img-thumbnail"/>
    <h4>Top Shows/Movies</h4>
    <ul>{knownForList}</ul>
  </div>
 );
}
