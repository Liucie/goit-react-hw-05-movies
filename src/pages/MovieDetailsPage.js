import { Route } from 'react-router';
import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getMovieDetails } from '../services/theMovieDb';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  console.log(movieId);
  console.log(location);
  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);
  // console.log(movie);

  return (
    movie && (
      <div>
        <Link to={location?.state?.from?.location ?? '/'} className="backLink">
          {location?.state?.from?.label ?? 'Back'}
        </Link>
        <div className="movieWrap">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movieImg"
          />
          <div className="textWrap">
            <h1 className="movieTitle">{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
        <div className="moreInfoWrap">
          <Link to={`${url}/cast`} className="moreInfoLink">
            Cast
          </Link>
          <Link to={`${url}/reviews`} className="moreInfoLink">
            Reviews
          </Link>
        </div>
        <Route path="/movies/:movieId/cast">
          <Cast />
        </Route>
        <Route path="/movies/:movieId/reviews">
          <Reviews />
        </Route>
      </div>
    )
  );
}
