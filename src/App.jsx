import { useState, useEffect } from "react";
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
        setError("Couldn't load coffee ☕");
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
    <div className="bg-amber-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-amber-900 mb-6">
        ☕ Coffee Menu
      </h1>
      <button
        onClick={getCoffee}
        className="bg-amber-700 text-white px-4 py-2 rounded mb-6"
      >
        Refresh Menu
      </button>
      <div className="space-y-4">
        {coffee.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow"
          >
            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>
            <p className="text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;