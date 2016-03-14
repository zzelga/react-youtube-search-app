import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <form>
        <fieldset className="form-group">
          <input
            className="form-control"
            value={this.state.searchTerm}
            placeholder="Search for Youtube Videos"
            onChange={event => this.onInputChange(event.target.value)} />
        </fieldset>
      </form>
    );
  }

  onInputChange(searchTerm) {
    this.setState({ searchTerm });
    this.props.onSearchTermChange(searchTerm);
  }
}

export default SearchBar;
