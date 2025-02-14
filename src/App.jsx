import { useEffect, useState } from "react";
import "./App.css";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [inputValue, setInputValue] = useState();
  const [movieData, setMovieData] = useState();
  // const API = `https://www.omdbapi.com/?t=pulp+fiction&apikey=${apiKey}`;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Search);
        setMovieData(data.Search);
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
            {movieData !== undefined ? (
              <section className="movie__container">
                {movieData.map((movie) => {
                  return (
                    <article key={movie.imdbID} className="movie__card">
                      <img
                        src={movie.Poster}
                        alt={`${movie.Title} Poster`}
                        title={movie.Title}
                      />
                      <div className="movie__text">
                        <p>
                          <strong>Título:</strong> {movie.Title}.
                        </p>
                        <p>
                          <strong>Año:</strong> {movie.Year}.
                        </p>
                        <p>
                          <strong>ID:</strong> {movie.imdbID.slice(2)}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </section>
            ) : (
              <span>No se encontró la película</span>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
