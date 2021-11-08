import { Switch, Route } from 'react-router';
import './App.css';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import Loading from './components/Loader/Loader';
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
function App() {
  return (
    <div className="App">
      <div className="container">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
