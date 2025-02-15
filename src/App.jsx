import { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search == "") {
      setError("No se puede buscar una película vacía.");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número.");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres.");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [query, setQuery] = useState();
  const { search, updateSearch, error } = useSearch();
  const { movies } = useMovies(search);

  const handleInputChange = (event) => {
    const value = event.target.value;
    console.log(value);

    updateSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ search });
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={search}
            name="search"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {search && (
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
