import React from 'react'
import MovieForm from '../components/movies/MovieForm'
import { addMovie } from '../actions/addMovie'
import { connect } from 'react-redux'

const NewMovieWrapper = ({ history, addMovie }) => {


    const handleSubmit = (event, formData, history) => {
      event.preventDefault()
      addMovie({
        ...formData}, 
        history)                //can also resetMovieForm here instead of in addMovie action creator by
                                //adding on .then(() => {
                                //    resetMovieForm() after history) importing & exporting & deconstructing it
                      
    } 
    return <MovieForm history={history} handleSubmit={handleSubmit} />  
        
}

  
  



export default connect(null, {addMovie})(NewMovieWrapper)