import { resetMovieForm } from './resetMovieForm'

export const addMovie = (data, history) => {
    console.log("this is history", history)
  return (dispatch) => {
    
    return fetch('http://10.0.0.99:3001/api/v1/movies', {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch({type: 'ADD_MOVIE', payload: response.data})
        dispatch(resetMovieForm())
        history.push(`/movies/${response.data.id}`)
      }
    })  
  }  
}