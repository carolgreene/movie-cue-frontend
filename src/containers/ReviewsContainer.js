import React, { Component } from 'react';
import ReviewForm from '../components/reviews/ReviewForm'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {
  
  render() {
    return (
      <div>
        <Reviews reviews={this.props.movie && this.props.movie.attributes.reviews}/>
        <ReviewForm movie={this.props.movie}/>
      </div>
    )
  }
}

export default ReviewsContainer