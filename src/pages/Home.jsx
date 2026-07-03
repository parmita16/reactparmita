import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>🏠 Home Page</h1>

      <Link to="/about">Go to About</Link>
    </>
  );
}

export default Home;