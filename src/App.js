import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MoviesContainer from './containers/MoviesContainer';
//import ReviewsContainer from './containers/ReviewsContainer';
import { connect } from 'react-redux'  //will go wherever we need to have access to the store
//import Home from './components/Home.js'
//import NavigationBar from './components/NavigationBar.js'

class App extends React.Component {

  
  
  render() {
  return (
    <div>
      {/*<NavigationBar />*/}
      <MoviesContainer />
      {/*<ReviewsContainer />*/}
    </div>
  )
 }
}



export default connect()(App)
