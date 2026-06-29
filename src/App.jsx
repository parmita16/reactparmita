import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [anime, setAnime] = useState("Naruto");
  useEffect(() => {
    console.log("Welcome Anime Fan!");
  }, []);
  useEffect(() => {
    document.title = anime;
    console.log("Anime Changed!");
  }, [anime]);
  return (
    <div className="container">
      <h1>🎌 Favorite Anime</h1>
      <h2>{anime}</h2>
      <button onClick={() => setAnime("Naruto")}>
        Naruto
      </button>
      <button onClick={() => setAnime("One Piece")}>
        One Piece
      </button>
      <button onClick={() => setAnime("Demon Slayer")}>
        Demon Slayer
      </button>
    </div>
  );
}
export default App;



