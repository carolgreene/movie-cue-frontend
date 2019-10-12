import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/deleteReview.js'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/Button'

const ReviewCard = props => {
  
  const movie = props.movie
  const history = props.history

  const handleDelete = (review, movie) => {  
    props.deleteReview(review.id, movie.attributes.id)
    history.push(`/movies/${movie.attributes.id}`)    
  }

  const handleBack = (movie) => {
    history.push(`/movies/${movie.attributes.id}`)
  }

  if (movie && movie.attributes.reviews) {
    let review = movie.attributes.reviews.filter(review => review.id == props.match.params.id)[0]
    console.log("ReviewCard review:", review)       

    return (    
      <div className="movieCard" style={{ backgroundColor: "lightGrey", height: "100vh", minHeight: "100vh" }}>
      
        <h4 style={{ padding: "10px 20px", textAlign: "left", color: "black"}}>{movie.attributes.title} Review</h4>
        <div className="list" style={{color: "black", padding: "10px 20px"}}>
          <li>{review.reviewer_name}</li>
          <li>{review.review_title}  {review.rating} Stars</li> 
          <li>{review.comments}</li> 
        </div>

        {/*use ButtonToolbar to group buttons together or className="float-right" to move one button to the right*/}
        
        <ButtonToolbar variant="outline-secondary">
          <Button variant="dark" size="sm" title="return" onClick={() => handleBack(movie)}>Back To Movie</Button>
          <Button variant="danger" size="sm" title="delete" onClick={() => handleDelete(review, movie)}>Delete Review</Button> 
        </ButtonToolbar>     
      </div>     
    )
  } else {
    return (
      <p>null</p>
    )
  }
}

export default connect(null, {deleteReview})(ReviewCard)
