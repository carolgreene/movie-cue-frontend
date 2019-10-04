import React from 'react';
import {Link} from 'react-router-dom'
//import MovieCard from './MovieCard';

const Movies = (props) => {  
  console.log("props in Movies", props.movies)

  //fixed mapping below by using props.movies.movies due to reducer. ck to see how to fix 
  //bc i don't like it. this is breaking everything. now container routing is broken. 
  //Changed back to just the movies reducer until i can figure it out. that just shows
  //movies [],  using combined reducers shows movies:{movies:[]}
  
  if(props.movies) {
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
    
}

export default Movies