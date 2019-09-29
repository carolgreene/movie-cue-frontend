import React from 'react';
import {Link} from 'react-router-dom'
//import MovieCard from './MovieCard';

const Movies = (props) => {  
  
  return (
    
    <div className="movies">
      <h2>Movies</h2>
      {props.movies.map(movie => 
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.attributes.title}</Link>
        </li>)}
  
    </div>      
   
  )    
    
}

export default Movies