import { useState } from "react";
function MenuCard({
  image,
  name,
  description,
  price,
  addToCart,
}) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="bg-gray-800 rounded-2xl p-8 text-center shadow-xl hover:scale-105 duration-300 relative">
      <button
        onClick={() => setFavorite(!favorite)}
        className="absolute top-4 right-4 text-3xl"
      >
        {favorite ? "❤️" : "🤍"}
      </button>
      <div className="text-7xl">
        {image}
      </div>
      <h2 className="text-2xl font-bold mt-4">
        {name}
      </h2>
      <p className="text-gray-400 mt-4">
        {description}
      </p>
      <p className="text-yellow-400 text-2xl font-bold mt-5">
        {price}
      </p>
      <button
        onClick={addToCart}
        className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400 duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}
export default MenuCard;
