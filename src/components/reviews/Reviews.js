import React from 'react'
import {connect} from 'react-redux'
import {deleteReview} from '../../actions/deleteReview.js'
import {Link} from 'react-router-dom'

const Reviews = (props) => {
console.log("props for Reviews:", props)

const reviews = props.reviews
//console.log("reviews:",reviews)

const movie = props.movie

const handleDelete = (review, movie) => {  
  props.deleteReview(review.id, movie.attributes.id)
}


  return (
    <div>
      <h3>Reviews</h3>
      {reviews && reviews.map(review =>  //1st time it runs it's undefined
         <li key={review.id}>
         <Link to={`/movies/${movie.id}/reviews/${review.id}`}>{review.rating} Stars</Link>{/*- {review.comments} <button onClick={() => handleDelete(review, movie)}>Delete</button>*/}</li>
        )}
    </div>
  )
}

export default connect(null, {deleteReview})(Reviews)