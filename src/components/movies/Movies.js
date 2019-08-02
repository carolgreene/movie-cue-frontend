import React, { Component } from 'react';
import MovieCard from './MovieCard';

class Movies extends Component {

  render() {
    return (
      <div>
        This is the Movies Component!
        <MovieCard />
      </div>
    )
  }
}

export default Movies