import React, { useState } from "react";
import { searchMovie } from "./api";

const App = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query) return;
    setError(null);
    try {
      const result = await searchMovie(query);
      if (result.Response === "True") {
        setMovie(result);
      } else {
        setMovie(null);
        setError(result.Error);
      }
    } catch (err) {
      setMovie(null);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movie Search App</h1>
      <input
        type="text"
        placeholder="Enter movie title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "10px", padding: "8px 15px" }}>
        Search
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
		{movie && (
        <div style={{ marginTop: "20px" }}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
          <p>{movie.Plot}</p>
        </div>
      )}
  </div>
)}

export default App;