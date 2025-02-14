import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [inputValue, setInputValue] = useState();
  const { movies } = useMovies(inputValue);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" action="">
          <input
            onChange={(event) => handleInputChange(event)}
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {inputValue && (
          <>
            <h2>Resultados {movies && <span>({movies.length})</span>}</h2>
            <section className="movie__container">
              <Movies movies={movies} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
