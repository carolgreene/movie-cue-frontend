import React, { Component } from 'react';
import { connect } from 'react-redux'
import {addMovie} from '../../actions/addMovie'  //had to do like this (../../) bc MovieForm is in  
                                                 //movies folder inside of the component
                 
                                      
 class MovieForm extends Component {
  
  state = {
    title: '', 
    genre: '', 
    rating: '', 
    runtime: '',
    description: ''
  }
  

  handleChange = (event) => {   
    this.setState({
      [event.target.name]: event.target.value    //need brackets bc it will read the key forthe object 
    })                                           //& set the value for it. w/o brackets it assigns the      
  }                                               //key a name of event.target.name 
                                               
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addMovie(this.state, this.props.history)  //local state
    this.setState({
      title: '', 
      genre: '', 
      rating: '', 
      runtime: '',
      description: ''
    })
    
  }

  render() {
    return (
      <div className="movieForm" style={{ backgroundColor: "lightGrey", height: "100vh", minHeight: "100vh" }}>
        <h3 style={{ padding: "10px 20px", textAlign: "left", color: "black"}}>Enter Movie</h3>
        <div style={{color: "black", padding: "10px 20px"}}>
        <form onSubmit={this.handleSubmit}>
          <input              
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          /><br/>
          <input
            type="text"
            name="genre"
            placeholder="genre"
            value={this.state.genre}
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
            type="text"
            name="runtime"
            placeholder="runtime"
            value={this.state.runtime}
            onChange={this.handleChange}
          /><br/>
          <input
            type="textarea"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
          /><br/>

          <input type="submit" />
        </form>
        </div>
      </div>
    )
  }
}

export default connect(null, {addMovie})(MovieForm)




