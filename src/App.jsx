import { useState } from "react";

function NarutoSearch() {
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  function searchCharacter() {
    setLoading(true);

    fetch(`https://dattebayo-api.onrender.com/characters?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.characters || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type Naruto"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={searchCharacter}>Search</button>

      {loading && <p>Loading...</p>}

      {results.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img
            src={character.images[0]}
            alt={character.name}
            width="100"
          />
        </div>
      ))}
    </div>
  );
}

export default NarutoSearch;