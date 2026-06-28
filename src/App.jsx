import { useState } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "") {
      alert("Please fill all fields.");
      return;
    }
    alert("Form Submitted!");
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Student Registration</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
export default App;



