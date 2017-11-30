import React, { Component } from 'react';
import SearchBar from './Searchbar';
import ResultsList from './ResultsList';

class AppIndex extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Actor Search App</h1>
            <hr/>
          </div>
        </div>
        <SearchBar/>
        <ResultsList/>
      </div>
    );
  }
}

export default AppIndex;
