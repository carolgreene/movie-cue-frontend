import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'


class Movies extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }

  handleLikes = () => {
    let newLikes = this.state.likes + 1
    this.setState({
      likes: newLikes
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
              <Button size="sm" onClick={() => this.handleLikes()}>Likes: {this.state.likes}</Button>
            </li>)} 
        </div>    
      )
    } else {
    return null 
    }
  }   
}

export default Movies