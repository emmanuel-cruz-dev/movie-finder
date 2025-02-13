import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <h1>Prueba técnica</h1>
      <div>
        <form className="form" action="">
          <label htmlFor="">
            <input
              onChange={(event) => handleInput(event)}
              type="text"
              placeholder="Avengers, Star Wars, The Matrix..."
            />
          </label>
          <p>{inputValue}</p>
        </form>
      </div>
    </>
  );
}

export default App;
