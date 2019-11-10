import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/deleteReview.js'
import Button from 'react-bootstrap/Button'


const ReviewCard = props => {
  
  const { movie, history, deleteReview } = props
  
  const handleDelete = (review, movie) => {  
    deleteReview(review.id, movie.attributes.id)
    history.push(`/movies/${movie.attributes.id}`)    
  }

  const handleBack = (movie) => {
    history.push(`/movies/${movie.attributes.id}`)
  }

  if (movie && movie.attributes.reviews) {
    let review = movie.attributes.reviews.filter(review => review.id == props.match.params.id)[0]
    console.log("ReviewCard review:", review)       

    return (    
      <div className="reviewCard" id="reviewCard">      
        <h4>{movie.attributes.title} Review</h4>
        <li>{review.reviewer_name}</li>
        <li>{review.review_title}  {review.rating} Stars</li> 
        <li>{review.comments}</li> 
         
        <div className="button">       
          <Button variant="dark" size="sm" title="back" onClick={() => handleBack(movie)}>Back To Movie</Button>
          <Button variant="danger" size="sm" title="delete" onClick={() => handleDelete(review, movie)}>Delete Review</Button> 
        </div>                
      </div>     
    )
  } else {
    return (
      <p>null</p>
    )
  }
}

export default connect(null, {deleteReview})(ReviewCard)
