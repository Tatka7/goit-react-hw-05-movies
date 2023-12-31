import { useState, useEffect, Suspense } from 'react';
import { useContexFetch } from '../../services/useContext';
import { useParams, Outlet } from 'react-router-dom';
import { Loader } from '../../components/Loader';

import axios from 'axios';

import {
  ListItem,
  MovieLink,
  AdditionalData,
  Span,
} from './MovieDetails.styled';

import MovieData from '../../components/MoviesList/MovieData';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios
          .get(`${url}movie/${movieId}?${key}&language=en-US`)
          .then(res => {
            return res.data;
          });
        setMovie(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchMovie();
  }, [url, key, movieId]);

  return (
    <>
      {error && <h2>{error}</h2>}
      {movie.id && <MovieData movie={movie} />}
      <AdditionalData>
        <Span>Additional information</Span>
        <ul>
          <ListItem>
            <MovieLink to="cast">Cast</MovieLink>
          </ListItem>
          <ListItem>
            <MovieLink to="reviews">Reviews</MovieLink>
          </ListItem>
        </ul>
      </AdditionalData>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
