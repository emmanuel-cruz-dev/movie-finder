import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

// const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [inputValue, setInputValue] = useState();
  // const [movieData, setMovieData] = useState();
  const { movies: mappedMovies } = useMovies(inputValue);
  // const API = `https://www.omdbapi.com/?t=pulp+fiction&apikey=${apiKey}`;

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
            <h2>
              Resultados {mappedMovies && <span>({mappedMovies.length})</span>}
            </h2>
            <section className="movie__container">
              <Movies movies={mappedMovies} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
