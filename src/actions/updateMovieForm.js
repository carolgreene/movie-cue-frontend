export const updateMovieForm = (name, value) => {
    const formData = { name, value }
  
    return {
      type: "UPDATE_MOVIE_FORM",
      formData
    }
  }
