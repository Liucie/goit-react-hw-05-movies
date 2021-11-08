import { getCast } from '../../services/theMovieDb';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId).then(result => setCast(result));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast.map(item => {
        return (
          <li key={item.id} className={s.item}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name}
              className={s.img}
            />
            <p>
              {item.name} as {item.character}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
