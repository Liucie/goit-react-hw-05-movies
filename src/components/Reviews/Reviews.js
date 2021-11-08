import { getReviews } from '../../services/theMovieDb';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(result => {
      console.log(result);
      setReviews(result);
    });
  }, [movieId]);

  return (
    reviews && (
      <ul className={s.list}>
        {reviews.map(review => {
          return (
            <li key={review.id} className={s.item}>
              <div>
                <p className={s.name}>{review.author}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
                  alt={review.author}
                  className={s.img}
                />
              </div>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
