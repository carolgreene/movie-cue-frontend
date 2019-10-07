import { resetMovieForm } from './resetMovieForm'


export const updateMovie = (data, history) => {
    console.log("this is data", data)
    console.log("this is history", history)
  return (dispatch) => {
    //const sendableMovieData = {      Don't need to use this here bc attributes are only 1 word
      //title: data.title,             Will need to use this in the review action creator
     // genre: data.genre,
      //rating: data.rating,
      //description: data.description
    //}
    //console.log(sendableMovieData)
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
    //.then(console.log)
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch({type: 'UPDATE_MOVIE', payload: response.data})
        //dispatch(resetMovieForm())
        
        history.push(`/movies/${response.data.id}`)
      }
    })  
  }  
}