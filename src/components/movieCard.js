import React, { Component } from 'react';
import './Movie.css'

 class Rating extends Component {
  render() {
    return (
      <div>
        <a href='#'className="rating">{'★'.repeat(this.props.movieRating).padEnd(5,'☆')}</a>
      </div>
    )
  }
}
export default class MovieCard extends Component {
    render() {
        return (
        <div className="card">
            <Rating movieRating={this.props.movie.rating}/>
            <img src={this.props.movie.picture} alt={this.props.movie.title} height='250' className="picture"/>
            <p className="title">{this.props.movie.title}</p>
            <h4 className="date">{this.props.movie.date}</h4>  
    </div>    
    )
  }
}