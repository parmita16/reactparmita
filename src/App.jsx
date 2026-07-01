import { useEffect, useState } from "react";
function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  function getWeather() {
    setLoading(true);
    setError("");
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.3240&current_weather=true"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.current_weather);
      })
      .catch(() => {
        setError("Failed to load weather.");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getWeather();
  }, []);
  if (loading) {
    return <h1 className="text-2xl p-5">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-red-500 p-5">{error}</h1>;
  }
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        🌤 Kathmandu Weather
      </h1>
      <button
        onClick={getWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-5"
      >
        Refresh
      </button>
      <div className="border rounded p-4">
        <h2 className="text-xl font-bold">
          Temperature: {weather.temperature}°C
        </h2>
        <p>Wind Speed: {weather.windspeed} km/h</p>
      </div>
    </div>
  );
}
export default App;