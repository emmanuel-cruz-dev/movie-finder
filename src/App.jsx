import { useState, useRef } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [inputValue, setInputValue] = useState();
  const { movies } = useMovies(inputValue);
  const inputRef = useRef();

  const handleInput = () => {
    console.log(inputRef.current.value);
    setInputValue(inputRef.current.value);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" action="">
          <input
            ref={inputRef}
            onChange={handleInput}
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
