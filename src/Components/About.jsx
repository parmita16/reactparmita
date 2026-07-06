import sanji from "../assets/sanji.jpg";
function About() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8">
        <div className="flex justify-center">
          <img
            src={sanji}
            alt="Sanji"
            className="rounded-3xl w-[400px] shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-yellow-400">
            Meet Chef Sanji
          </h1>
          <p className="mt-6 text-gray-300 leading-8 text-lg">
            Sanji is the legendary chef of the Straw Hat Pirates.
            Every dish is prepared with passion and only the
            freshest ingredients from the Grand Line.
          </p>
          <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold hover:bg-yellow-400">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
export default About;