import React from 'react'

const Reviews = (props) => {
//console.log(props)

const reviews = props.reviews
console.log("reviews:",reviews)


  return (
    <div>
      <h3>Reviews</h3>
      {reviews && reviews.map(review =>  //1st time it runs it's undefined
         <li key={review.id}>{review.rating} Stars- {review.comments}</li>
        )}
    </div>
  )
}

export default Reviews