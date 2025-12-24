import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-neutral-800">
      <nav className="w-full flex items-center justify-between px-12 py-8">
        <div className="text-xs tracking-widest uppercase">
          Beryl Jiang
        </div>

        <ul className="flex gap-10 text-xs tracking-widest uppercase">
          <li className="hover:opacity-60 transition cursor-pointer">Home</li>
          <li className="hover:opacity-60 transition cursor-pointer">Gallery</li>
          <li className="hover:opacity-60 transition cursor-pointer">Contact Me</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
