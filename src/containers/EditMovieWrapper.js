import React from 'react'
import MovieForm from '../components/movies/MovieForm'
import { updateMovie } from '../actions/updateMovie'
import { setFormDataForEdit } from '../actions/setFormDataForEdit'
import { connect } from 'react-redux'
import { resetMovieForm } from '../actions/resetMovieForm'

class EditMovieWrapper extends React.Component {      
  
    
  componentDidMount(){
    console.log("in edit wrapper: history", this.props.history)
    this.props.movie && this.props.setFormDataForEdit(this.props.movie)
  }

  componentDidUpdate(prevProps) {
    this.props.movie && !prevProps.movie &&this.props.setFormDataForEdit(this.props.movie)
  }

  componentWillUnmount() {
    this.props.resetMovieForm()
  }

  handleSubmit = (formData) => {
    //console.log("IN HANDLE SUBMIT", history)
    const {updateMovie, movie, history} = this.props
    console.log("IN HANDLE SUBMIT: HISTORY", history)
    updateMovie({
      ...formData,
      movieId: movie.id}, 
      history)                //can also resetMovieForm here instead of in addMovie action creator by
                              //adding on .then(() => {
                              //    resetMovieForm() after history) importing & exporting & deconstructing it
  } 

  render() {
    const {history, movie} = this.props
    return <MovieForm editMode handleSubmit={this.handleSubmit} /> 
  } 
        
}  



export default connect(null, {updateMovie, setFormDataForEdit, resetMovieForm})(EditMovieWrapper)