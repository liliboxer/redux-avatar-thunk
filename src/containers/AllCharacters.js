import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/avatarActions';
import { getAllCharacters, getCharactersLoading } from '../selectors/avatarSelectors';
import Characters from '../components/Characters';

class AllCharacters extends Component {
  static propTypes = {
    characters: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;
    return <Characters characters={characters}/>;
  }
}

const mapStateToProps = state => ({
  characters: getAllCharacters(state),
  loading:getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
