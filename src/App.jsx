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
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Gallery */}
        <h2 className="text-xs tracking-widest uppercase mb-12">
          Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] bg-neutral-200 overflow-hidden flex items-center justify-center"
            >
              <span className="text-[10px] tracking-widest uppercase text-neutral-500">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;
