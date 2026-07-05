function StatCard({ title, value }) {
  return (
    <div className="bg-green-800 rounded-xl p-4 shadow-lg text-center">
      <h2 className="text-lg font-bold text-green-200">{title}</h2>
      <p className="text-3xl font-bold text-white mt-2">{value}</p>
    </div>
  );
}
export default StatCard;
