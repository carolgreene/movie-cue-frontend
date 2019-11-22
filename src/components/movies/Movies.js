import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Movies extends Component {  

  constructor(props) {
    super(props)
    this.state = { }
  }
  

  handleLikes = (e) => {
    let newLikesCount
    console.log("e is", e.target.id)    
    
    if(this.state[e.target.id] != undefined) {
      newLikesCount = this.state[e.target.id] + 1
    } else {
      newLikesCount = 1
    }
  
    this.setState({
      [e.target.id]: newLikesCount
    })
    console.log("this.state[e.target.id]", this.state[e.target.id])
    console.log("newLikes", newLikesCount)    
  }    
  

  render() {  
       
    if(this.props.movies) {
      
      return (    
        <div className="movies" id="movies" >
          <h2>Movies</h2>

          {this.props.movies.map(movie => 
            <li key={movie.id} >
              <Link to={`/movies/${movie.id}`}>{movie.attributes.title}...</Link>
              <button size="sm" id={movie.id} onClick={this.handleLikes}>Like: {this.state[`${movie.id}`]|| 0} </button>  
            </li>)} 
        </div>    
      )
    } else {
    return null 
    }
  }   
}

export default Movies