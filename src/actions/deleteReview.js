export const deleteReview = (reviewId, movieId) => {
    console.log("in action:", movieId)
  //debugger
  return (dispatch) => {
    return fetch(`http://10.0.0.99:3001/api/v1/movies/${movieId}/reviews/${reviewId}`, {
     
      method: 'DELETE'
    })
    .then(response => response.json())
    
    .then(movie => dispatch({type: 'DELETE_REVIEW', payload: movie.data}))
  } 
}