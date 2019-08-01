import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesContainer from './containers/MoviesContainer';
import ReviewsContainer from './containers/ReviewsContainer';

class App extends React.Component {

  render() {
  return (
    <div>
      <MoviesContainer />
      <ReviewsContainer />
    </div>
  )
 }
}

export default App
