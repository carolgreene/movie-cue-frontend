import React from 'react';
import MovieCard from './MovieCard';

const Movies = (props) => {
  
  
  return (
    <div>
      {props.movies.map(movie => <li key={movie.id}>{movie.attributes.title}</li>)}
      <MovieCard />
    </div>
  )  
}

export default Movies