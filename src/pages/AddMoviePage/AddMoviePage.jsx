import { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard'
import * as moviesAPI from '../../utilities/movies-api';


export default function AddMoviePage({ addTo, movies, setMovies }) {
  const [query, setQuery] = useState('');
  // console.log(addTo);

  useEffect(() => {
    searchMovies();
  }, [])

  async function searchMovies() {
    const movieSearch = await moviesAPI.search(query);
    setMovies(movieSearch);
  }
  const individualMovies = [];
  const unique = movies.filter(element => {
  const isDuplicate = individualMovies.includes(element.title);

    if (!isDuplicate) {
      individualMovies.push(element.title);
      return true;
    }
    return false;
  });
  const searchedMovies = unique.map((movie, idx) => 
  <MovieCard
  addTo={addTo}
  key={movie.id}
  id={movie.id}
  poster={movie.poster_path}
  title={movie.title || movie.name}
  date={movie.first_air_date || movie.release_date}
   />);

  return (
    <>
      <h1 className="page-title-add">Add Movies</h1>
      <div className="searchBar">
        <input type="text" value={query} onChange={(evt) => setQuery(evt.target.value)} />
        <button onClick={searchMovies} >search</button>
      </div>
      <div className="mainAddDiv">
        <br />
        <br />
        <div className={movies.length > 0 ? "searchGrid" : ""}>
          {(movies.length > 0 ? searchedMovies : "No match, try again!")}
          </div>
      </div>
      <br />
    </>
  );
}