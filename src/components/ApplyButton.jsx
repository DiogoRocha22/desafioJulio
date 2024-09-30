import { useState } from "react"

export default function ApplyButton() {
  const [applied, setApply] = useState(false);

  return (
    <button 
    onClick={() => {
      setApply(true);
    }} 
    className={`bg-blue-500 px-6 py-2 mt-2 md:mt-0 rounded-md text-white w-full md:w-auto ${applied ? "cursor-default" : "hover:bg-blue-700 transition"} `}>
      {applied ? "✅ Inscrição enviada!" : "Aplicar"}
    </button>
  );
}
