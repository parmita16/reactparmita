function ReviewCard(props) {
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
      <h2 className="text-2xl font-bold">
        {props.name}
      </h2>
      <p className="text-yellow-400 mt-2">
        {props.rating}
      </p>
      <p className="text-gray-300 mt-5">
        "{props.review}"
      </p>
    </div>
  );
}
export default ReviewCard;
