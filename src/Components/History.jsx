function History({ history }) {
  return (
    <div className="bg-green-900 rounded-xl p-4 mt-6">
      <h2 className="text-xl font-bold mb-3 text-green-300">
        ! Training History !    
          </h2>
      {history.length === 0 ? (
        <p className="text-gray-300">No training yet.</p>
      ) : (
        <ul className="space-y-2">
          {history.map((item, index) => (
            <li
              key={index}
              className="bg-green-800 p-2 rounded-md text-white"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default History;
