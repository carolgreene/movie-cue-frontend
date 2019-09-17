import React from 'react'

const ReviewCard = props => {
  //console.log("props-review card movie:", props.movie)
  //console.log("reviewCard-review props", props.match.params.id)

  if (props.movie) {
    let review = props.movie.attributes.reviews.filter(review => review.id == props.match.params.id)[0]
    console.log("ReviewCard review:", review)    

    return (    
      <div>
        <p>Review</p>
        <h2>{props.movie.attributes.title}</h2>
        <li>{review.rating} Stars</li> 
        <li>{review.comments}</li> 
      </div>     
    )
  } else {
    return (
      <p>null</p>
    )
  }
}

export default ReviewCard
