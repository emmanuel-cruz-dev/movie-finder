// import { config } from "dotenv";
// config();

const apiKey = import.meta.env.VITE_API_KEY;

import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const API = `https://www.omdbapi.com/?t=pulp+fiction&apikey=${apiKey}`;

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
          {/* <p>{inputValue}</p> */}
        </form>
      </header>
      <main>Aquí irán los resultados</main>
    </div>
  );
}

export default App;
