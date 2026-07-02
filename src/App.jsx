import { useState } from "react";
import "./App.css";
function App() {
  const moods = [
    { emoji: "😊", name: "Happy", color: "#FFD54F" },
    { emoji: "😢", name: "Sad", color: "#64B5F6" },
    { emoji: "😴", name: "Sleepy", color: "#B39DDB" },
    { emoji: "🔥", name: "Motivated", color: "#FF8A65" },
    { emoji: "😎", name: "Cool", color: "#81C784" },
  ];
  const [selectedMood, setSelectedMood] = useState(null);
  return (
    <div
      className="container"
      style={{
        backgroundColor: selectedMood ? selectedMood.color : "#f5f5f5",
      }}
    >
      <h1>🎨 Mood Picker</h1>
      <p>How are you feeling today?</p>
      <div className="buttons">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => setSelectedMood(mood)}
          >
            {mood.emoji} {mood.name}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="card">
          <h2>{selectedMood.emoji}</h2>
          <h3>{selectedMood.name}</h3>
          <p>
            Your mood today is <strong>{selectedMood.name}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
export default App;
