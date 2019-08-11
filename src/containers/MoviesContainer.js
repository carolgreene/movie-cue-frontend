import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieForm from '../components/movies/MovieForm';
import Movies from '../components/movies/Movies';
import { fetchMovies } from '../actions/fetchMovies'

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies()

  }
  
  render() {
    return (
      <div>
        This is the Movies Container!
        <MovieForm />
        <Movies movies={this.props.movies}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)