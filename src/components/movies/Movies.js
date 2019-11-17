import React, {Component} from 'react';
import {Link} from 'react-router-dom'

//need to figure out how to load the initial info into likes state for the movie_id & count of 0 for each movie.
//Then update only the count of the id that has been clicked while keeping the rest the same.
//possibly thinking of having a hash w/keys of id & count.


class Movies extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      likedMovies: {
        
        id: "",
        count:0
        
      } 
    }
      
    
    
    
  }

  //this updates the count of likes but does it for all of them, not just the one being clicked

  handleLikes = (e) => {
    console.log("e is", e.target.id)
    let testMovie = this.props.movies.filter(movie => movie.id === e.target.id)
    console.log("testMovie:", testMovie)
    let newLikes = this.state.likedMovies.count + 1
    this.setState({
      likedMovies: {
        ...this.state.likedMovies,
        id: e.target.id,
        count: newLikes
      }
    })
  }

  render() {  
    if(this.props.movies) {
      
      return (    
        <div className="movies" id="movies" >
          <h2>Movies</h2>

          {this.props.movies.map(movie => 
            <li key={movie.id} >
              <Link to={`/movies/${movie.id}`}>{movie.attributes.title}</Link>
              <button size="sm" id={movie.id} onClick={this.handleLikes}>Likes: {this.state.likedMovies.count}</button>
            </li>)} 
        </div>    
      )
    } else {
    return null 
    }
  }   
}

export default Movies