function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  const total = cart.reduce((sum, item) => {
    return (
      sum +
      Number(item.price.replace("$", "")) *
        item.quantity
    );
  }, 0);
  return (
    <section className="bg-gray-900 text-white py-20">
      <h1 className="text-5xl font-bold text-center text-yellow-400">
        Shopping Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center mt-10 text-xl">
          Your cart is empty.
        </p>
      ) : (
        <div className="max-w-5xl mx-auto mt-10 space-y-6">
          {cart.map((food) => (
            <div
              key={food.id}
              className="bg-gray-800 rounded-xl p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">
                  {food.image} {food.name}
                </h2>
                <p className="text-yellow-400 mt-2">
                  {food.price}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQuantity(food.id)}
                  className="bg-red-500 w-10 h-10 rounded-lg"
                >
                  -
                </button>
                <span className="text-xl font-bold">
                  {food.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(food.id)}
                  className="bg-green-500 w-10 h-10 rounded-lg"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(food.id)}
                className="bg-red-600 px-5 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="bg-black rounded-xl p-8 mt-10">
            <h2 className="text-3xl font-bold">
              Total: ${total}
            </h2>
            <button className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400">
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
export default Cart;