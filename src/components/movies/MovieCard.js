import React from 'react';
import {connect} from 'react-redux'
import {deleteMovie} from '../../actions/deleteMovie'
import ReviewsContainer from '../../containers/ReviewsContainer';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const MovieCard = (props) => {

  //destructure props
  const {movie, history, deleteMovie } = props
    
  const handleDelete = (movie) => {  
    deleteMovie(movie.attributes.id)
    history.push(`/movies`)    
  }
                                                                                    
  return (
    movie ?    
    <div className="movieCard" id="movieCard" >
      <h2>{movie.attributes.title}</h2>
      <li>{movie.attributes.rating}</li>
      <li>{movie.attributes.genre}</li>
      <li>{movie.attributes.runtime} minutes</li>
      <li>{movie.attributes.description}</li>         

      <div className="button" >
        <Link to={`/movies/${movie.id}/edit`}>
          <Button variant="dark" size="sm">
            Edit Movie
          </Button>          
        </Link>
        <Button variant="danger" size="sm" title="delete" onClick={() => handleDelete(movie)}>Delete Movie</Button>         
      </div>
                                                 
      <div className="reviewsContainer" >
        <ReviewsContainer movie={movie}/>   {/*give ReviewsContainer the movie prop. Will then be given to the ReviewForm*/}
      </div>
    </div> :
    null
  )  
}

export default connect(null, {deleteMovie})(MovieCard)                                
  
    
