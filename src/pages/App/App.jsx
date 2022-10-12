import { useState, useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import * as moviesAPI from '../../utilities/movies-api';
import AddMoviePage from '../AddMoviePage/AddMoviePage';
import MyCollectionPage from '../MyCollectionPage/MyCollectionPage';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';


function App() {
  const [user, setUser] = useState(getUser());
  const [movies, setMovies] = useState([]);
  const [collection, setCollection] = useState([]);
  const navigate = useNavigate();

  async function addTo(movieObj) {
    const movie = await moviesAPI.addMovies(movieObj);
    setCollection([movie, ...collection]);
    navigate('/collection');
  }

  useEffect(function () {
    async function showCollection() {
      const newCollection = await moviesAPI.getCollection();
      setCollection(newCollection);
    }
    if (user) {
      showCollection();
    } else {
      setCollection([]);
    }
  }, [user]);

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/*" element={<Navigate to="/collection/add" />} />
            <Route path="/collection/add" element={<AddMoviePage addTo={addTo} movies={movies} setMovies={setMovies} />} />
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
