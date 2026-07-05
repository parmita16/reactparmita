function ActionButton({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white font-bold py-3 rounded-lg hover:scale-105 transition-all`}
    >
      {text}
    </button>
  );
}
export default ActionButton;
