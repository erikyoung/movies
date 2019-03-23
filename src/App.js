import React, { Component } from 'react';


import './App.css';
import NavBar from './NavBar'; 
import MoviesList from './MoviesList'; 

import SAMPLE_DATA from './sample_data'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MoviesList movies={SAMPLE_DATA.results} />
      </div>
    );
  }
}

export default App;
