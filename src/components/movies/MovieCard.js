import React from 'react';

const MovieCard = (props) => {
  console.log(props)

  let movie = props.movies[props.match.params.id - 1]
  console.log(movie)

  return (
    
    <div>
      {movie ? movie.attributes.title : null}
    </div>
  )
  
}

export default MovieCard