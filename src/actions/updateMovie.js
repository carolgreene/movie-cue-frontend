import { resetMovieForm } from './resetMovieForm'

export const updateMovie = (data, history) => {
    console.log("this is data", data)
    console.log("this is history", history)
  return (dispatch) => {
    
    return fetch(`http://10.0.0.99:3001/api/v1/movies/${data.movieId}`, {
      credentials: "include",
      method: 'PATCH',
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
        dispatch({type: 'UPDATE_MOVIE', payload: response.data})
        history.push(`/movies/${response.data.id}`)
      }
    })  
  }  
}