import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const MovieCard = (props) => {
    
  let movie = props.movie                                                                                 
                                                                                    
  return (
    movie ?    
    <div className="movieCard" style={{ backgroundColor: "lightGrey", height: "100vh", minHeight: "100vh" }}>
      <h2 style={{ padding: "10px 20px", textAlign: "left", color: "black"}}>{movie.attributes.title}</h2>
      <div className="list" style={{color: "black", padding: "10px 20px"}}>
        <li>{movie.attributes.rating}</li>
        <li>{movie.attributes.genre}</li>
        <li>{movie.attributes.runtime} minutes</li>
        <li>{movie.attributes.description}</li>  
      </div>  

      <div style={{padding: "10px 20px"}}>
        <Link to={`/movies/${movie.id}/edit`}>
          <Button variant="dark" size="sm">
            Edit Movie
          </Button>
        </Link>
       
      </div>
                                                 
    <div className="reviewsContainer" style={{ padding: "10px 20px"}}>
    <ReviewsContainer movie={movie}/>   {/*give ReviewsContainer the movie prop. Will then be given to the ReviewForm*/}
    </div>
    </div> :
    null
  )  
}

export default MovieCard                                 
  
    
    