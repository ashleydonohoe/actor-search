import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultItem from './ResultsItem';
import _ from 'lodash';

class ResultsList extends Component {
  renderResults() {
    const { results } = this.props;
    const resultsArray = results.map((result) => {
      return <ResultItem person={result} key={result.name}/>
    });

    return resultsArray;
  }

  render() {
    return (
      <div className="row">
      {this.renderResults()}
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
