import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieForm from '../components/movies/MovieForm';
import Movies from '../components/movies/Movies';
import { fetchMovies } from '../actions/fetchMovies'
import  {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import MovieCard from '../components/movies/MovieCard'
import Home from '../components/Home'
import Reviews from '../components/reviews/Reviews'
import ReviewCard from '../components/reviews/ReviewCard'
import { NavigationBar } from '../components/NavigationBar'
import { Layout } from '../components/Layout'
import { Jumbotron } from '../components/Jumbotron'

class MoviesContainer extends Component {

  

  componentDidMount() {
    this.props.fetchMovies()

  }
  
  render() {

    {/*const renderMergedProps = (component, ...rest) => {
      const finalProps = Object.assign({}, ...rest);
      return (
        React.createElement(component, finalProps)
      );
    }

    const PropsRoute = ({ component, ...rest }) => {
      return (
        <Route {...rest} render={routeProps => {
          return renderMergedProps(component, routeProps, rest);
        }}/>
      );
    }*/}

    const { movies } = this.props  //**ck this later to see if I can get Howard's way to work instead of getting movie w/in MC component
    return (      
    
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
            {/*  <NavLink exact to='/movies'>Movies |</NavLink>
            <NavLink exact to='/movies/new'>Add Movie |</NavLink>
            <NavLink exact to='/'>Home </NavLink>*/}
        {/*</div>*/}
         <Layout>
          <Switch>   {/* will match only the 1st matching route, not multiple routes. :id must be below new*/}
        
            <Route exact path='/' component={Home}/>
            <Route path='/movies/new' component={MovieForm}/>  {/*router props are automatically passed when you use component*/}
            <Route exact path='/movies/:id/edit' render={props => {
              const movie = movies.find(movie => movie.id === props.match.params.id)
              console.log(movie)
              return <MovieForm movie={movie} {...props}/>
            }
          }/>
          {/*<Route exact path='/movies/:id' render={(routerProps) => <MovieCard {...routerProps} movies={this.props.movies}/>}/>*/}      
            <Route exact path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/>
          {/*Howard did*/}
            <Route exact path='/movies/:id' render={props => {
              const movie = movies.find(movie => movie.id == props.match.params.id)
              console.log("route:", movie)
              return <MovieCard movie={movie} {...props} movies={this.props.movies}/>
            }
          }/>
          {/*<Route path='/movies/:id/reviews' render={(routerProps) => <MovieCard {...routerProps} movies={this.props.movies}/>}/>*/}
            <Route exact path='/movies/:movie_id/reviews/:id' render={props => {
              const matchingMovie = movies.find(movie => movie.id === props.match.params.movie_id)
            {/*const matchingReview = matchingMovie.attributes.reviews.find(review => review.id === props.match.params.review.id)*/}
              
              console.log("matchingMovie", matchingMovie)             
              return <ReviewCard movie={matchingMovie} {...props} movies={this.props.movies}/>
            }
        }/>
           
            {/*return <ReviewCard movie={movie} {...props} reviews={this.props.movie && this.props.movie.attributes.reviews}/>
          }
        }/>*/}
          {/*<PropsRoute path='/movies/:movie_id/reviews/:id' component={ReviewCard} movies={this.props.movies}/>*/}
        
         {/*} <Route path='/movies/:movie_id/reviews/:id' render={routeProps => <ReviewCard {...routeProps} movies={movies}/>} />*/}
            <Route exact path='movies/:movie_id/reviews' component={Reviews}/>
        

          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
          
      
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps, { fetchMovies })(MoviesContainer)