import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addReview} from '../../actions/addReview';

class ReviewForm extends Component {

  state = {
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
      rating: '',
      comments: ''
    })
  
  }

  render() {
    return (
      <div>
        <h4>Write Review</h4>
        <form onSubmit={this.handleSubmit}>
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

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(null, {addReview})(ReviewForm)