export function fetchMovies() {
  return (dispatch) => {
    fetch('http://10.0.0.99:3001/api/v1/movies')   
    .then(r => r.json())
    .then(movies => dispatch({
      type: 'FETCH_MOVIES',
      payload: movies.data
    }))
  }
   
}