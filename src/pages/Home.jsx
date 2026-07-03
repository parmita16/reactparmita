import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Home
      </NavLink>
      <br />
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        About
      </NavLink>
      <h1>🏠 Home Page</h1>
    </>
  );
}
export default Home;