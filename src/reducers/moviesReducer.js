const initialState = {movies: []} //since this will be objects we pass key 
                                  //of movies w/a value of an empty array
export default function moviesReducer(state = initialState, action) {
  //debugger;
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {movies: action.payload}

    case 'ADD_MOVIE':
      return {...state, movies: [...state.movies, action.payload]}

    default:
      return state
  }
}