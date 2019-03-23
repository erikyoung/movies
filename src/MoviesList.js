/* Core */
import React, { Component } from 'react';
import Movie from './Movie'; 



// import styles from './styles';

export default class MoviesList extends Component {
  render() {
    return (
    	<div>
          {this.props.movies.map(movie => <Movie {...movie} />)}
        </div>
    );
  }
}
