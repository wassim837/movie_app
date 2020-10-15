import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import Rating from './movieCard';
import './Movie.css';

const MovieShow = ({movies}) => {
  const {title} = useParams();
  var movie = movies.find(p => p.title == title);
  var movieTrailer;
  if (movie)
  movieTrailer = (
      <div className="movieshow">
          <Rating movieRating={movie.rating}/>
          <img src={movie.picture} alt={movie.title} className="picture"/>
          <h3 className="title">{movie.title}</h3>
          <p className="date">{movie.date}</p>
          <p className="description">{movie.description}</p>

          <ReactPlayer url={movie.trailer} />
      </div>
  );
          else movieTrailer = (<h2> Sorry. Movie doesn't exist </h2>) ;
      return (
      
        <header>
        <div className="Logo">
        <h1>MOVIE</h1>
        </div>
         <nav class="main-nav">
         <a href="#films">Films</a>
         <a href="#series">Séries</a>
         <a href="#arabe">Arabe</a>
         <a href="kids">Kids</a>
         </nav>
       <nav className="sub-nav">
         <a href="#"><i className="fas fa-bell sub-nav-logo"></i></a>
         </nav>
        </header>
    );
  }
  

export default MovieShow;
