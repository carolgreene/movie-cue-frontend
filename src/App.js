import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MoviesContainer from './containers/MoviesContainer';
//import ReviewsContainer from './containers/ReviewsContainer';
import { connect } from 'react-redux'  //will go wherever we need to have access to the store

class App extends React.Component {

  componentDidMount() {
    
    //fetch('http://10.0.0.99:3001/api/v1/movies/2')
   
    //  .then(r => r.json())
      //.then(data => console.log(data.data.attributes.reviews[0]))
    //  .then(data => console.log(data.data.attributes.title))
  }


  
  render() {
  return (
    <div>
      <MoviesContainer />
      
    </div>
  )
 }
}



export default connect()(App)
