import axios from "axios";
import { useEffect, useState } from "react";
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((m) => {
          return (
            <div
              key={m.name}
              style={{
                border: "1px solid black",
                margin: "8px 8px",
                minWidth: 200,
                flex: 0,
              }}
            >
              <h2>{m.name}</h2>
              <p>release date: {m.release_date}</p>
              <p>category: {m.category}</p>
              <img src={m.img} style={{ width: "50%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
