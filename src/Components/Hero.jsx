import sanji from "../assets/sanji.jpg";
function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
     {} <div>
          <p className="text-yellow-400 text-lg font-semibold">
            Welcome to  </p>
          <h1 className="text-6xl font-extrabold mt-3">
            Sanji's Restaurant  </h1>
          <p className="text-gray-300 mt-6 text-lg leading-8">
            Where every meal is prepared with love,
            inspired by the Grand Line and cooked
            by the legendary Straw Hat chef.  </p>
          <div className="mt-8 flex gap-5">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-xl">
              View Menu  </button>
            <button className="border-2 border-yellow-500 px-8 py-3 rounded-xl hover:bg-yellow-500 hover:text-black font-bold">
              Order Now  </button>
          </div>
        </div> {}
        <div className="flex justify-center">
          <img
            src={sanji}
            alt="Sanji"
            className="rounded-3xl shadow-2xl w-[450px]" />
        </div>
      </div>
    </section>
  );  }
export default Hero;
