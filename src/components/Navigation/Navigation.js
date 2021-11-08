import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={s.navContainer}>
      <NavLink exact to="/" className={s.link} activeClassName="">
        Homepage
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName="">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
