import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchActorResults } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actor: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchActorResults("Jennifer Lawrence");
  }

  onInputChange(event) {
    this.setState({
      actor: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.actor);

    this.props.fetchActorResults(this.state.actor);
    this.setState({
      actor: ''
    });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onFormSubmit} className="input-group col-md-12">
          <input placeholder="Enter the name of an actor/actress" className="form-control" value={this.state.actor} onChange={this.onInputChange}/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchActorResults}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
