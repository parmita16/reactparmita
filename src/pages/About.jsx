import { NavLink } from "react-router-dom";
function About() {
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
      <h1>📖 About Page</h1>
    </>
  );
}
export default About;