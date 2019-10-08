import React from 'react'
import {Link} from 'react-router-dom'

const Reviews = (props) => {

  const reviews = props.reviews
  const movie = props.movie

  return (
    <div>
      <h3>Reviews</h3>
      {reviews && reviews.map(review =>  //1st time it runs it's undefined
         <li key={review.id}>
           <Link to={`/movies/${movie.id}/reviews/${review.id}`}>{review.review_title}  {review.rating} Stars</Link>
         </li>
        )}
    </div>
  )
}

export default Reviews