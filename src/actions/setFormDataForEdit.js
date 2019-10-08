export const setFormDataForEdit = movie => {
  console.log("edit action", movie)
  const movieFormData = {
    title: movie.attributes.title,
    genre: movie.attributes.genre,
    rating: movie.attributes.rating,
    runtime: movie.attributes.runtime,
    description: movie.attributes.description
  }
  console.log("in action", movieFormData)

  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    movieFormData
  }
}