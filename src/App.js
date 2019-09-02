import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MoviesContainer from './containers/MoviesContainer';
//import ReviewsContainer from './containers/ReviewsContainer';
import { connect } from 'react-redux'  //will go wherever we need to have access to the store

class App extends React.Component {

  
  
  render() {
  return (
    <div>
      <MoviesContainer />
      
    </div>
  )
 }
}



export default connect()(App)
