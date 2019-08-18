import React from 'react';
import {Route, Link} from 'react-router-dom'
import MovieCard from './MovieCard';

const Movies = (props) => {
  
  
  return (
    <div>
      {props.movies.map(movie => 
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.attributes.title}</Link>
        </li>)}
      
    </div>
  )  
}

export default Movies