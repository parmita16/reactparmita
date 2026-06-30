import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  function getUsers() {
    setLoading(true);
    setError("");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch(() => {
        setError("Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <h1 className="text-2xl font-bold">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-red-500">{error}</h1>;
  }
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <button
        onClick={getUsers}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Refresh
      </button>
      <div className="mt-4">
        {users.map((user) => (
          <p key={user.id} className="mb-2">
            {user.name}
          </p>
        ))}
      </div>
    </div>
  );
}
export default App;
