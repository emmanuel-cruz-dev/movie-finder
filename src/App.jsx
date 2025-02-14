import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [query, setQuery] = useState();
  const { movies } = useMovies(query);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ query });
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={query}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {query && (
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
