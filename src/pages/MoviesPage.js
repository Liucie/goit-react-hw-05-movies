import { useState } from 'react';
import { searchMovies } from '../services/theMovieDb';
import MoviesList from '../components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(searchValue).then(result => {
      setSearchResults(result);
    });
  };

  const handleSearchChange = e => {
    setSearchValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={searchValue}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleSearchChange}
        />
        <button type="submit" className="button">
          <span className="">Search</span>
        </button>
      </form>
      {searchResults && <MoviesList movies={searchResults}></MoviesList>}
    </div>
  );
}
