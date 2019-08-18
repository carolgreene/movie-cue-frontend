import React from 'react';
import MovieCard from './MovieCard';

const Movies = (props) => {
  
  
  return (
    <div>
      {props.movies.map(movie => 
        <div key={movie.id}><MovieCard movie={movie}/></div>)}
      
    </div>
  )  
}

export default Movies