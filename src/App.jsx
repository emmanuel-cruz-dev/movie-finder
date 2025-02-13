import { useEffect, useState } from "react";
import "./App.css";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [inputValue, setInputValue] = useState();
  const [movieData, setMovieData] = useState({});
  // const API = `https://www.omdbapi.com/?t=pulp+fiction&apikey=${apiKey}`;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [inputValue]);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" action="">
          <input
            onChange={(event) => handleInput(event)}
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <h2>Aquí irán los resultados</h2>
        <article className="movie__container">
          <img src={movieData.Poster} alt="" />
          <div>
            <p>Título: {movieData.Title}</p>
            <p>Año: {movieData.Year}</p>
            <p>Genero: {movieData.Genre}</p>
            <p>Director: {movieData.Director}</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export default App;
