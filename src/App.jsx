import { useEffect, useState } from "react";
function App() {
  const [coffee, setCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  function getCoffee() {
    setLoading(true);
    setError("");
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => {
        setCoffee(data);
      })
      .catch(() => {
        setError("Failed to load coffee.");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getCoffee();
  }, []);
  if (loading) {
    return <h1 className="text-2xl p-5">☕ Brewing coffee...</h1>;
  }
  if (error) {
    return <h1 className="text-red-500 p-5">{error}</h1>;
  }
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        ☕Today's Coffee
      </h1>
      <button
        onClick={getCoffee}
        className="bg-purple-700 text-white px-4 py-2 rounded mb-5"
      >
        Refresh
      </button>
      {coffee.slice(0,8).map((item) => (
        <div
          key={item.id}
          className="border rounded p-3 mb-3"
        >
          <h2 className="font-bold">{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
export default App;
