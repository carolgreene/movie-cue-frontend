export const deleteMovie = (movieId) => {
    
    return (dispatch) => {
      return fetch(`http://10.0.0.99:3001/api/v1/movies/${movieId}`, {     
        method: 'DELETE'
      })
      .then(response => response.json())    
      .then(movie => dispatch({type: 'DELETE_MOVIE', payload: movie.data}))
    } 
  }