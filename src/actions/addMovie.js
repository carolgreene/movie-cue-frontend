export const addMovie = (data) => {
    //debugger;
  return (dispatch) => {
    fetch('http://10.0.0.99:3001/api/v1/movies', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(movie => dispatch({type: 'ADD_MOVIE', payload: movie}))
  }

  
}