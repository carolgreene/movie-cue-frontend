import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/deleteReview.js'

const ReviewCard = props => {
  //console.log("props-review card movie:", props.movie)
  //console.log("reviewCard-review props", props.match.params.id)

  const movie = props.movie
  const history = props.history

  const handleDelete = (review, movie) => {  
    props.deleteReview(review.id, movie.attributes.id)
    history.push(`/movies/${movie.attributes.id}`)    
  }

  if (movie && movie.attributes.reviews) {
    let review = movie.attributes.reviews.filter(review => review.id == props.match.params.id)[0]
    console.log("ReviewCard review:", review)       

    return (    
      <div>
        <h4>{movie.attributes.title} Review</h4>
        <li>{review.reviewer_name}</li>
        <li>{review.review_title}  {review.rating} Stars</li> 
        <li>{review.comments}</li> 
        <button onClick={() => handleDelete(review, movie)}>Delete Review</button>
      </div>     
    )
  } else {
    return (
      <p>null</p>
    )
  }
}

export default connect(null, {deleteReview})(ReviewCard)
