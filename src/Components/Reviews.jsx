import ReviewCard from "./ReviewCard";
import reviewData from "../data/reviewData";
function Reviews() {
  return (
    <section className="bg-black text-white py-20">
      <h1 className="text-5xl font-bold text-center text-yellow-400">
        Customer Reviews
      </h1>
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-8 px-8">
        {reviewData.map((customer) => (
          <ReviewCard
            key={customer.id}
            name={customer.name}
            rating={customer.rating}
            review={customer.review}
          />
        ))}
      </div>
    </section>
  );
}
export default Reviews;