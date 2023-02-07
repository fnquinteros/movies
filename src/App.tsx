import { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import "./App.css";

function App() {
  const [movies, setMovies] = useState<any[]>([]);

  const getMovies = async () => {
    const data = await axios
      .get("https://63e21881109336b6cbff6aa1.mockapi.io/api/Movies")
      .then((response) => response.data)
      .catch((err) => console.log(err));
    return data;
  };

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

  return (
    <div className="App">
      <h1>Movies!</h1>
      <div>
        {movies.map((m) => {
          return (
            <div key={m.name}>
              <h2>{m.name}</h2>
              <p>release date: {m.release_date}</p>
              <p>category: {m.category}</p>
              <img src={m.img} style={{ width: "20%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
