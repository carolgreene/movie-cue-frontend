import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

const MovieCard = (props) => {
  console.log(props)

  let movie = props.movies[props.match.params.id - 1]  //this won't work if items have been deleted & index is
  console.log(movie)                                   //not necessarily 1 less than the id number

  return (
    <div>
    <h2>
      {movie ? movie.attributes.title : null}
    </h2>
    <ReviewsContainer />
    </div>
  )
  
}

export default MovieCard