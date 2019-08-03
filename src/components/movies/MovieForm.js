import React, { Component } from 'react';

class MovieForm extends Component {
  

  render() {
    return (
      <div>
        <h3>Enter Movie</h3>
        <form >
          <input 
            type="text"
            name="title"
            placeholder="title"
          /><br/>
          <input
            type="text"
            name="genre"
            placeholder="genre"
          /><br/>
          <input 
            type="text"
            name="rating"
            placeholder="rating"
          /><br/>
          <input
            type="textarea"
            name="description"
            placeholder="description"
          /><br/>

          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MovieForm