import { useState } from "react";
function useQuote() {
  const [quote, setQuote] = useState("");
  function saveQuote(newQuote) {
    setQuote(newQuote);
  }
  return {
    quote,
    saveQuote,
  };
}
export default useQuote;
