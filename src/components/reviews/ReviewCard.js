import React from 'react'
import { connect } from 'react-redux'
import { deleteReview } from '../../actions/deleteReview.js'

const ReviewCard = props => {
  
  const movie = props.movie
  const history = props.history

  const handleDelete = (review, movie) => {  
    props.deleteReview(review.id, movie.attributes.id)
    history.push(`/movies/${movie.attributes.id}`)    
  }

  const handleReturn = (movie) => {
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
        <button title="delete" onClick={() => handleDelete(review, movie)}>Delete Review</button>
        <button title="return" onClick={() => handleReturn(movie)}>Return To Movie</button>
      </div>     
    )
  } else {
    return (
      <p>null</p>
    )
  }
}

export default connect(null, {deleteReview})(ReviewCard)
