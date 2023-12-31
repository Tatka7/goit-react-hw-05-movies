import { useState, useEffect, lazy, Suspense } from 'react';
import * as API from '../../services/tmdb-api';
import { Loader } from 'components/Loader';

import { Title } from './Home.styled';

const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await API.fetchTrending();
        setTrending(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <Title>Tranding today</Title>
      {error && <h2>{error}</h2>}
      {trending.length > 0 && (
        <Suspense fallback={<Loader />}>
          <MoviesList movies={trending} />
        </Suspense>
      )}
    </>
  );
}
