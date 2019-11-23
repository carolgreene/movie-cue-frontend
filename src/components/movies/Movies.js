import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Movies extends Component {  

  constructor(props) {
    super(props)
    this.state = {
      likes: {},
      sorted: false
     }
  }
  

  handleLikes = (e) => {
    let newLikesCount
    console.log("e is", e.target.id)    
    
    if(this.state.likes[e.target.id] != undefined) {
      newLikesCount = this.state.likes[e.target.id] + 1
    } else {
      newLikesCount = 1
    }
  
    this.setState({
      likes:{
        ...this.state.likes,
        [e.target.id]: newLikesCount
      }
      
    })
    console.log("this.state.likes[e.target.id]", this.state.likes[e.target.id])
    console.log("newLikes", newLikesCount)    
  }  

  handleClick = () => {
    this.setState({
      sorted: !this.state.sorted      
    })
  }

  handleSort = () => {
    const moviesCopy = this.props.movies.map(movie => movie)
    moviesCopy.sort(function(a, b) {
      const titleA = a.attributes.title.toUpperCase(); // ignore upper and lowercase
      const titleB = b.attributes.title.toUpperCase(); // ignore upper and lowercase
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
    return moviesCopy
  }

    
  render() {  
    let moviesToDisplay = this.state.sorted ? this.handleSort() : this.props.movies

    if(this.props.movies) {
      
      return (    
        <div className="movies" id="movies" >
          <h2>Movies</h2>
          <button size="sm" onClick={this.handleClick}>Sort</button>

          {moviesToDisplay.map(movie => 
            <li key={movie.id} >
              <Link to={`/movies/${movie.id}`}>{movie.attributes.title}...</Link>
              <button size="sm" id={movie.id} onClick={this.handleLikes}>Like: {this.state.likes[`${movie.id}`]|| 0} </button>  
            </li>)}  
        </div>           
      )
    } else {
    return null 
    }    
  } 
}

export default Movies