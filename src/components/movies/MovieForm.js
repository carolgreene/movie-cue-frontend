import React from 'react';
import { connect } from 'react-redux'
import {updateMovieForm} from '../../actions/updateMovieForm' 
                                              
const MovieForm = ({ formData, updateMovieForm, history, handleSubmit, editMode }) => {

  const { title, genre, rating, runtime, description } = formData

  const handleChange = (event) => {   
    const {name, value} = event.target
    updateMovieForm(name, value)  
  }                                                                    
                                                
  return (
    <div className="movieForm" style={{ backgroundColor: "lightGrey", height: "100vh", minHeight: "100vh" }}>
      <h3 style={{ padding: "10px 20px", textAlign: "left", color: "black"}}>Enter Movie</h3>
      <div style={{color: "black", padding: "10px 20px"}}>
      <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData, history)
      }}>
        <input              
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange}
        /><br/>
        <input
          type="text"
          name="genre"
          placeholder="genre"
          value={genre}
          onChange={handleChange}
        /><br/>
        <input 
          type="text"
          name="rating"
          placeholder="rating"
          value={rating}
          onChange={handleChange}
        /><br/>
        <input 
          type="text"
          name="runtime"
          placeholder="runtime"
          value={runtime}
          onChange={handleChange}
        /><br/>
        <input
          type="textarea"
          name="description"
          placeholder="description"
          value={description}
          onChange={handleChange}
        /><br/>
        <br/>
        <input
           style={{backgroundColor: "black", color: "white", fontSize: "14px", borderRadius: "6px", padding: "6px"}}   
           type="submit" 
           value={editMode ? "Update Movie" : "Create Movie"}  
        />
      </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    formData: state.movieForm
  }
}

export default connect(mapStateToProps, {updateMovieForm})(MovieForm)
                          
                                      
   
                                              




  





