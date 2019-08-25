import React from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

const MovieCard = (props) => {
  console.log("props:", props)
  console.log("match:", props.match.params.id[0])

  let movie = props.movies.filter(movie => movie.id == props.match.params.id)[0]  //can use either this or below
                                                                                            //this finds movie based on id
                                                                                            //returns an array w/just 1 movie in it
                                                                                            //that's why you need [0] so it will only
                                                                                            //return the movie

  //let movie = props.movies[props.match.params.id - 1]  //this won't work if items have been deleted & index is
  //console.log(movie)                                   //not necessarily 1 less than the id number
                                                        //this finds movie based on index
  return (
    <div>
    <h2>{movie ? movie.attributes.title : null}</h2>
    <li>{movie ? movie.attributes.rating : null}</li>
    <li>{movie ? movie.attributes.runtime  : null}</li>
    <li>{movie ? movie.attributes.description : null}</li>
    <ReviewsContainer movie={movie}/>   {/*give ReviewsContainer the movie prop. Will then be given to the ReviewForm*/}
    </div>
  )
  
}

export default MovieCard