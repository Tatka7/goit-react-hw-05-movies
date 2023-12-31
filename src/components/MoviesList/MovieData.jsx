import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { yearTransform } from '../../services/dateTransform';

import { BackButton, Container, Poster, MovieInfo } from './MovieData.styled';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
const defaultImage = 'https://i.postimg.cc/Kj28Cmn0/default-movie-800x800.jpg';
// console.log(movie);
export default function MovieData({ movie }) {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  const genresMap = array => {
    return array
      .map(genre => {
        return genre.name;
      })
      .join(', ');
  };

  return (
    <>
      <Link to={backLinkHref.current}>
        <BackButton>🡄 Go back</BackButton>
      </Link>
      <Container>
        <Poster
          src={movie.poster_path ? IMAGE_URL + movie.poster_path : defaultImage}
          alt={movie.title}
        />
        <MovieInfo>
          <h2>
            {movie.title ? movie.title : movie.original_title}{' '}
            {`(${yearTransform(movie.release_date)})`}
          </h2>
          <p>
            User scores: {movie.vote_average.toFixed(1)}
            /10
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{genresMap(movie.genres)}</p>
        </MovieInfo>
      </Container>
    </>
  );
}

MovieData.prototype = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      vote_average: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
