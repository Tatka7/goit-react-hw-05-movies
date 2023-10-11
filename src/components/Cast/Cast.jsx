import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useContexFetch } from '../../services/useContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from 'components/Loader';

import { Title } from './Cast.styled';

const CastData = lazy(() => import('./CastData'));

export default function Cast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const { url, key } = useContexFetch();

  useEffect(() => {
    const fetchCast = async movieId => {
      try {
        setCast([]);
        setError('');
        const response = await axios
          .get(`${url}movie/${movieId}/credits?${key}&language=en-US`)
          .then(res => {
            return res.data.cast;
          });
        if (response.length === 0) {
          setError("We don't have any cast for this movie");
        }
        setCast(response);
      } catch (error) {
        setError(error);
      }
    };

    fetchCast(movieId);
  }, [movieId, key, url]);

  return (
    <>
      {error && <Title>{error}</Title>}
      {cast.length > 0 && (
        <Suspense fallback={<Loader />}>
          <CastData cast={cast} />
        </Suspense>
      )}
    </>
  );
}
