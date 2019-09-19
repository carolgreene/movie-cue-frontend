export const addReview = (review, movieId) => {
  
  return (dispatch) => {
    const sendableReviewData = {              //had to add this bc I added fields w/2 word. React is camelCase, rails is snake_case
      reviewer_name: review.reviewerName,
      review_title: review.reviewTitle,
      rating: review.rating,
      comments: review.comments,
      movie_id: review.movieId
    }
    fetch(`http://10.0.0.99:3001/api/v1/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendableReviewData)
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