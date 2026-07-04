import { useParams, useNavigate } from "react-router-dom";
function Character() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>{id}</h1>
      <button onClick={() => navigate("/")}>
        Go Home
      </button>
      <button onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}
export default Character;
