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
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Video Gallery */}
        <h2 className="text-xs tracking-widest uppercase mb-12 text-center">
          Video Gallery
        </h2>

        {/* Showreel (big) */}
        <div className="relative aspect-video bg-neutral-200 flex items-center justify-center mb-16">
          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-neutral-500/40 flex items-center justify-center">
              <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[14px] border-l-neutral-500/60 ml-1" />
            </div>
          </div>

          {/* Center label like the example */}
          <div className="text-center">
            <div className="text-lg tracking-widest uppercase text-neutral-700">
              Beryl Jiang
            </div>
            <div className="text-sm tracking-widest uppercase text-neutral-600 mt-1">
              Showreel
            </div>
          </div>
        </div>

        {/* Smaller videos with text on the right */}
        <div className="space-y-12">

          {[
            {
              title: "Remnants of You",
              year: "2025",
              sub: "Short film directed and shot by Sean Victoriano",
            },
            {
              title: "Decision to Leave (Remake)",
              year: "2024",
              sub: "Short film",
            },
            {
              title: "Coming Soon Project",
              year: "2024",
              sub: "Music video / commercial / short film",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-neutral-200 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-neutral-500/40 flex items-center justify-center">
                    <div className="w-0 h-0 border-y-[5px] border-y-transparent border-l-[9px] border-l-neutral-500/60 ml-0.5" />
                  </div>
                </div>

                <span className="absolute bottom-3 left-3 text-[10px] tracking-widest uppercase text-neutral-500">
                  Coming Soon
                </span>
              </div>

              {/* Text */}
              <div className="pt-1">
                <div className="text-sm tracking-wide text-neutral-800">
                  {v.title} — {v.year}
                </div>
                <div className="text-xs text-neutral-600 mt-2 leading-relaxed max-w-md">
                  {v.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default App;
