import { useState, useEffect } from "react";
import "./App.css";
const animeData = [
  {
    id: "naruto",
    name: "Naruto",
    icon: "🍥",
    genre: "Action / Ninja",
    desc: "A young ninja who dreams of becoming the strongest in his village.",
  },
  {
    id: "onepiece",
    name: "One Piece",
    icon: "🏴‍☠️",
    genre: "Adventure / Pirate",
    desc: "A crew of pirates sailing the Grand Line in search of the One Piece.",
  },
  {
    id: "demonslayer",
    name: "Demon Slayer",
    icon: "🗡️",
    genre: "Action / Fantasy",
    desc: "A boy trains to become a demon slayer to save his sister.",
  },
];
function App() {
  const [selected, setSelected] = useState(animeData[0]);
  useEffect(() => {
    console.log("Welcome Anime Fan!");
  }, []);
  useEffect(() => {
    document.title = selected.name;
    console.log("Anime Changed!");
  }, [selected]);
  return (
    <div className="wrap">
      <p className="label">Now watching</p>
      <h1 className="title">Your favorite anime</h1>
      <div className="cards">
        {animeData.map((anime) => (
          <div
            key={anime.id}
            className={`card ${selected.id === anime.id ? "active" : ""}`}
            onClick={() => setSelected(anime)}
          >
            <div className="icon">{anime.icon}</div>
            <div className="name">{anime.name}</div>
            <div className="genre">{anime.genre}</div>
          </div>
        ))}
      </div>
      <div className="result">
        <p className="result-label">Selected</p>
        <p className="result-name">{selected.name}</p>
        <p className="result-desc">{selected.desc}</p>
      </div>
    </div>
  );
}
export default App;