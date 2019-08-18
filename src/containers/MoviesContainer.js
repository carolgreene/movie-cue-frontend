import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieForm from '../components/movies/MovieForm';
import Movies from '../components/movies/Movies';
import { fetchMovies } from '../actions/fetchMovies'
import {Route, Switch} from 'react-router-dom'
import MovieCard from '../components/movies/MovieCard'

class MoviesContainer extends Component {

  componentDidMount() {
    this.props.fetchMovies()

  }
  
  render() {
    return (
      <div>     
        <Switch>   {/* will match only the 1st matching route, not multiple routes. :id must be below new*/}
          <Route path='/movies/new' component={MovieForm}/>  
          <Route path='/movies/:id' render={(routerProps) => <MovieCard {...routerProps} movies={this.props.movies}/>}/>      
          <Route exact path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)