import React from 'react';
import {Link} from 'react-router-dom'
//import MovieCard from './MovieCard';

const Movies = (props) => {  
  
  return (
    
    <div className="movies" style={{ backgroundColor: "lightGrey", height: "100vh", minHeight: "100vh" }}>
      <h2 style={{ padding: "10px 20px", textAlign: "left", color: "black"}}>Movies</h2>
      {props.movies.map(movie => 
        
        <li key={movie.id} style={{color: "black", padding: "10px 20px"}}>
          <Link to={`/movies/${movie.id}`}>{movie.attributes.title}</Link>
        </li>)}
  
    </div>      
   
  )    
    
}

export default Movies