import { useEffect, useState } from "react";
import "./App.css";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [inputValue, setInputValue] = useState();
  const [movieName, setMovieName] = useState();
  // const API = `https://www.omdbapi.com/?t=pulp+fiction&apikey=${apiKey}`;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setMovieName(data.Title));
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
          <p>{movieName}</p>
        </form>
      </header>
      <main>Aquí irán los resultados</main>
    </div>
  );
}

export default App;
