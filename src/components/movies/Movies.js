import React, {Component} from 'react';
import {Link} from 'react-router-dom'

//need to figure out how to load the initial info into likes state for the movie_id & count of 0 for each movie.
//Then update only the count of the id that has been clicked while keeping the rest the same.
//possibly thinking of having a hash w/keys of id & count.

//I think I might be on to something here but push is not working yet. 
class Movies extends Component {  

  constructor(props) {
  super(props)
  this.state = { }

  }
  
    
    
    
  

  
//incrementing is working!! Just need to figure out how to show the likes on the screen correctly
  handleLikes = (e) => {
    let newLikes
    console.log("e is", e.target.id)
    let testMovie = this.props.movies.filter(movie => movie.id === e.target.id)
    console.log("testMovie:", testMovie)
    //let newLikes = this.state.likedMovies + 1
    if(this.state[e.target.id] != undefined) {
      newLikes = this.state[e.target.id] + 1
  } else {
    newLikes = 1
  }
  
      this.setState({
      //likedMovies: {
        [e.target.id]: newLikes
      })
      console.log("this.state[e.target.id]", this.state[e.target.id])
      console.log("newLikes", newLikes)
    //}
        //...this.state.likedMovies,
        //id: e.target.id,
        //count: newLikes
      //}
    }
    
  

  render() {  
    console.log("movies state", this.state)
    //console.log("this.state[2]", this.state[2])
    
    if(this.props.movies) {
      
      return (    
        <div className="movies" id="movies" >
          <h2>Movies</h2>

          {this.props.movies.map(movie => 
            <li key={movie.id} >
              <Link to={`/movies/${movie.id}`}>{movie.attributes.title}</Link>
          <button size="sm" id={movie.id} onClick={this.handleLikes}>Likes: 0 </button>  {/*{this.state[`${movie.id}`].value} ||*/}
            </li>)} 
        </div>    
      )
    } else {
    return null 
    }
  }   
}

export default Movies