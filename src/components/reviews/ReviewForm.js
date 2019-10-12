import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addReview} from '../../actions/addReview';
import Button from 'react-bootstrap/Button'

class ReviewForm extends Component {

  state = {
    reviewerName: '',
    reviewTitle: '',
    rating: '',
    comments: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault() 
    this.props.addReview(this.state, this.props.movie.attributes.id)
    this.setState({
      reviewerName: '',
      reviewTitle: '',
      rating: '',
      comments: ''
    })  
  }

  render() {
    return (
      <div>
        <h4 style={{marginTop: "20px"}}>Write Review</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="reviewerName"
            placeholder="reviewer name"
            value={this.state.reviewerName}
            onChange={this.handleChange}
          /><br/>
          <input
            type="text"
            name="reviewTitle"
            placeholder="reviewTitle"
            value={this.state.reviewTitle}
            onChange={this.handleChange}
          /><br/>
          <input
            type="text"
            name="rating"
            placeholder="rating"
            value={this.state.rating}
            onChange={this.handleChange}
          /><br/>
          <input
            type="textarea"
            name="comments"
            placeholder="comments"
            value={this.state.comments}
            onChange={this.handleChange}
          /><br/>
          <br/>
          <Button variant= "dark" size="sm" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default connect(null, {addReview})(ReviewForm)
