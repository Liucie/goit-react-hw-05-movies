import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  // const {url} = useRouteMatch();
  const location = useLocation();
  // console.log(location)
  return (
    <ul className={s.list}>
      {movies.map(item => {
        return (
          <li key={item.id} className={s.item}>
            <Link
              to={{
                // pathname : `${url}/${item.id}`,
                pathname: `movies/${item.id}`,
                state: {
                  from: {
                    location,
                    label: 'Back to search',
                  },
                },
              }}
              className={s.link}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                className={s.img}
              />
              <p className={s.text}>{item.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
