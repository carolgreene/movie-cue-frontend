import React, { Component } from 'react';
import MovieForm from '../components/movies/MovieForm';
import Movies from '../components/movies/Movies';

class MoviesContainer extends Component {
  
  render() {
    return (
      <div>
        This is the Movies Container!
        <MovieForm />
        <Movies />
      </div>
    )
  }
}

export default MoviesContainer