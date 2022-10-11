import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as moviesAPI from '../../utilities/movies-api';
import AuthPage from '../AuthPage/AuthPage';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import MyCollectionPage from '../MyCollectionPage/MyCollectionPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [movies, setMovies] = useState([]);
  const [collection, setCollection] = useState([]);





  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/*" element={<Navigate to="/collection" />} />
            <Route path="/collection/add" element={<AddMoviePage movies={movies} setMovies={setMovies} />} />
            <Route path="/collection" element={<MyCollectionPage collection={collection} />} />
            <Route path="/collection/details/:id" element={<MovieDetailsPage collection={collection} setCollection={setCollection} />} />

          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
