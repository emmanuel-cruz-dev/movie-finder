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

        if (data.Search === undefined) {
          return setMovieData(undefined);
        }
        const movieFilter = data.Search.filter(
          (movie) => movie.Type == "movie"
        );
        const moviePosterFilter = movieFilter.filter(
          (movie) => movie.Poster !== "N/A"
        );
        const movieYear = moviePosterFilter.sort((a, b) => b.Year - a.Year);
        setMovieData(movieYear);
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
            <h2>Resultados {movieData && <span>({movieData.length})</span>}</h2>
            {movieData != undefined ? (
              <section className="movie__container">
                {movieData.map((movie) => {
                  return (
                    <article key={movie.imdbID} className="movie__card">
                      <img
                        src={movie.Poster}
                        alt={`${movie.Title} Poster (${movie.Year})`}
                        title={`${movie.Title} (${movie.Year})`}
                      />
                      <div className="movie__text">
                        <p>
                          <strong>Título:</strong> {movie.Title}
                        </p>
                        <p>
                          <strong>Año:</strong> {movie.Year}
                        </p>
                        <p className="movie__type">
                          <strong>Tipo:</strong> {movie.Type}
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
              <span>No se encontró la película.</span>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
