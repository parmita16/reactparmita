import { useState } from "react";
function App() {
  const [advice, setAdvice] = useState("");
  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Random Advice</h1>
      <button
        onClick={getAdvice}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Get Advice
      </button>
      <p className="mt-4">{advice}</p>
    </div>
  );
}
export default App;
