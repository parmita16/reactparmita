import { useParams } from "react-router-dom";

function Character() {

  const { id } = useParams();

  return (
    <>
      <h1>Character Page</h1>

      <h2>ID: {id}</h2>
    </>
  );
}

export default Character;
