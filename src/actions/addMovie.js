export const addMovie = (data) => {
    //console.log(data)
  return (dispatch) => {
    //const sendableMovieData = {      Don't need to use this here bc attributes are only 1 word
      //title: data.title,             Will need to use this in the review action creator
     // genre: data.genre,
      //rating: data.rating,
      //description: data.description
    //}
    //console.log(sendableMovieData)
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
    //.then(console.log)
    .then(movie => dispatch({type: 'ADD_MOVIE', payload: movie.data}))
    
  }

  
}