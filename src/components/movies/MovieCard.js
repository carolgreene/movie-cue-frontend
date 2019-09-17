import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import {Link} from 'react-router-dom'

const MovieCard = (props) => {
  console.log("props:", props)
  console.log("match:", props.match.params.id[0])

  //let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]  //can use either this or below
                                                                                            //this finds movie based on id
    let movie = props.movie                                                                                        //returns an array w/just 1 movie in it
                                                                                            //that's why you need [0] so it will only
                                                                                            //return the movie

  //let movie = props.movies[props.match.params.id - 1]  //this won't work if items have been deleted & index is
  //console.log(movie)                                   //not necessarily 1 less than the id number
                                                        //this finds movie based on index
  return (
    movie ?    
    <div>
      <h2>{movie.attributes.title}</h2>
      <li>{movie.attributes.rating}</li>
      <li>{movie.attributes.runtime}</li>
      <li>{movie.attributes.description}</li>    
    
    <Link to={`/movies/${movie.id}/edit`}>Edit this Movie</Link>
    {movie.attributes.reviews.map(review =>
    <li key={review.id}>
    <Link to={`/movies/${movie.id}/reviews/${review.id}`}>{review.rating} Stars</Link>
    </li>
    )
  }
    
    {/*<ReviewsContainer movie={movie}/>   give ReviewsContainer the movie prop. Will then be given to the ReviewForm*/}
    </div> :
    null
  )
  
}

export default MovieCard