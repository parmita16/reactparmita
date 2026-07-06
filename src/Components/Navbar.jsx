function Navbar({ cartCount }) {
  return (
    <nav className="bg-black text-white px-10 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-yellow-400">
          🍽️ Sanji's Restaurant
        </h1>
        <ul className="flex gap-8 items-center">
          <li className="cursor-pointer hover:text-yellow-400">
            Home
          </li>
          <li className="cursor-pointer hover:text-yellow-400">
            Menu
          </li>
          <li className="cursor-pointer hover:text-yellow-400">
            Contact
          </li>
          <li className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
           🛒 {cartCount}
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
