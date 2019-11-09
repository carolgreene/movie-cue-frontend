import React from 'react';
import {Link} from 'react-router-dom'


const Movies = (props) => {  
  
  if(props.movies) {
    return (    
      <div className="movies" id="movies" >
        <h2>Movies</h2>

        {props.movies.map(movie => 
          <li key={movie.id} >
            <Link to={`/movies/${movie.id}`}>{movie.attributes.title}</Link>
          </li>)} 
      </div>    
    ) 
  }   
}

export default Movies