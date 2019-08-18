import React, { Component } from 'react';
//import { connect } from 'react-redux';

class ReviewForm extends Component {

  state = {
    rating: '',
    comments: ''
  }

  render() {
    return (
      <div>
        <h4>Write Review</h4>
        <form>
          <input
            type="text"
            name="rating"
            placeholder="rating"
            value={this.state.rating}
          /><br/>
          <input
            type="textarea"
            name="comments"
            placeholder="comments"
            value={this.state.comments}
          /><br/>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ReviewForm