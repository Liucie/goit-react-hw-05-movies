import { useState, useEffect } from 'react';
import getTrandingMovies from '../services/theMovieDb';
import MoviesList from '../components/MoviesList/MoviesList';

export default function Homeview() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrandingMovies().then(result => setMovies(result));
  }, []);
  return <MoviesList movies={movies} />;
}
