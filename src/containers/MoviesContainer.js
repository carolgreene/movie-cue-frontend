import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../components/movies/Movies';
import { fetchMovies } from '../actions/fetchMovies'
import  {BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import MovieCard from '../components/movies/MovieCard'
import Home from '../components/Home'
import Reviews from '../components/reviews/Reviews'
import ReviewCard from '../components/reviews/ReviewCard'
import { NavigationBar } from '../components/NavigationBar'
import { Layout } from '../components/Layout'
import { Jumbotron } from '../components/Jumbotron'
import NewMovieWrapper from './NewMovieWrapper'
import EditMovieWrapper from './EditMovieWrapper'


class MoviesContainer extends Component {
  

  componentDidMount() {
    this.props.fetchMovies()
  }
  
  render() {
    const { movies } = this.props     

    return (       
      <React.Fragment>
        <Router>
          <Jumbotron />
          <NavigationBar />               
          <Layout>
            <Switch>   {/* will match only the 1st matching route, not multiple routes. :id must be below new*/}          
              <Route exact path='/' component={Home}/>
              <Route path='/movies/new' component={NewMovieWrapper}/>  {/*router props are automatically passed when you use component*/}
              <Route exact path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
              <Route exact path='movies/:movie_id/reviews' component={Reviews}/>

              <Route exact path='/movies/:id' render={props => {
                const movie = movies.find(movie => movie.id == props.match.params.id)
                return <MovieCard movie={movie} {...props} movies={this.props.movies}/>
                }
              }/>

              <Route exact path='/movies/:id/edit' render={props => {
                const movie = movies.find(movie => movie.id === props.match.params.id)
                return <EditMovieWrapper movie={movie} {...props}/>
                }
              }/>           
            
              <Route exact path='/movies/:movie_id/reviews/:id' render={props => {
                const matchingMovie = movies.find(movie => movie.id === props.match.params.movie_id)              
                return <ReviewCard movie={matchingMovie} {...props} movies={this.props.movies}/>
                }
              }/>         
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>        
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  }
}

export default withRouter(connect(mapStateToProps, { fetchMovies })(MoviesContainer))