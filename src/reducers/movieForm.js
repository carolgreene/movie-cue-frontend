const initialState = {  
  title: "",
  genre: "",
  rating: "",
  runtime: "",
  description: ""  
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MOVIE_FORM":
      const returnValue = {
        ...state, 
        [action.formData.name]: action.formData.value
      }
      return returnValue
    
    case 'RESET_MOVIE_FORM':
      return initialState    

    case "SET_FORM_DATA_FOR_EDIT":
    console.log("in reducer", action.movieFormData)
      return action.movieFormData
      
    default:
      return state  
  }
}
