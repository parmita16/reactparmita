import { useRef } from "react";
import "./App.css";
import useQuote from "./useQuote";
function App() {
  const inputRef = useRef();
  const { quote, saveQuote } = useQuote();
  function handleSave() {
    saveQuote(inputRef.current.value);
  }
  function handleFocus() {
    inputRef.current.focus();
  }
  function handleClear() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }
  return (
    <div className="container">
      <h1>Daily Motivation</h1>
      <input
        ref={inputRef}
        placeholder="Write today's motivation..."   />
      <div className="buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleFocus}>Focus</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <h2>Saved Quote</h2>
      <p>{quote || "No quote saved yet."}</p>
    </div>    );
}
export default App;
