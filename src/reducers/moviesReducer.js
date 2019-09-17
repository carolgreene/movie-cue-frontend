const initialState = {movies: []} //since this will be objects we pass key 
                                 //of movies w/a value of an empty array


export default function moviesReducer(state = initialState, action) {
  //debugger;
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {movies: action.payload}

    case 'ADD_MOVIE':
    console.log("reducer:", action.payload)
      return {...state, movies: [...state.movies, action.payload]}

    case 'ADD_REVIEW':
    console.log("reducer-add review:", action.payload)
      let movies = state.movies.map(movie => {
        if (movie.id === action.payload.id) {
          return action.payload
        } else {
          return movie
        }
      })
      return {...state, movies: movies}

      case 'DELETE_REVIEW':
      let moviesDelete = state.movies.map(movie => {
        if (movie.id === action.payload.id) {
          return action.payload
        } else {
          return movie
        }
      })
      return {...state, movies: moviesDelete}
      

    default:
      return state
  }
}