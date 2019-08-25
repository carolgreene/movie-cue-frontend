export const addReview = (review, movieId) => {
  
  return (dispatch) => {
    fetch(`http://10.0.0.99:3001/api/v1/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(r => r.json())
    .then(movie =>  {
      if (movie.error) {
        alert(movie.error)
      } else {
        dispatch({type: 'ADD_REVIEW', payload: movie.data})
      }
    }
   )
  }
}