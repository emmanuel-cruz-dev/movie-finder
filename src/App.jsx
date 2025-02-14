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
      .then((data) => {
        console.log(data);
        setMovieData(data);
      });
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
        {inputValue && (
          <>
            <h2>Resultados</h2>
            <article className="movie__container">
              <img src={movieData.Poster} alt="" />
              <div className="movie__text">
                <p>
                  <strong>Título:</strong> {movieData.Title}.
                </p>
                <p>
                  <strong>Año:</strong> {movieData.Year}.
                </p>
                <p>
                  <strong>Genero:</strong> {movieData.Genre}.
                </p>
                <p>
                  <strong>Director:</strong> {movieData.Director}.
                </p>
                <p>
                  <strong>Actors:</strong> {movieData.Actors}.
                </p>
                <p>
                  <strong>Trama:</strong> {movieData.Plot}
                </p>
                <p className="movie__rating">{movieData.imdbRating}</p>
              </div>
            </article>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
