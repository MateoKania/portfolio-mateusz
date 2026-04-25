import { useState } from "react";

export function ProjectCard1({ titleProject, images, text, TechIcon }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((next) => (next + 1) % images.length);
  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="mt-10 mb-5 lg:mb-10 flex flex-col items-center">
      <h3 className="lg:text-3xl px-4 text-2xl text-center font-bold mb-6 text-amber-400">
        {titleProject}
      </h3>

      <div className="flex flex-col w-11/12 max-w-2xl gap-5">
        {/* IMAGE CAROUSEL */}
        <div className="relative rounded-3xl p-0.5 bg-linear-to-br from-amber-400/80 via-amber-200/30 to-amber-500/50 shadow-[0_20px_50px_rgba(251,191,36,0.2)] transition-transform duration-300 hover:-translate-y-1">
          <div className="relative rounded-[22px] overflow-hidden">
            <img
              className="w-full aspect-video object-cover"
              src={images[index]}
              alt={`${titleProject} screenshot ${index + 1}`}
            />

            <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? "bg-amber-400 w-4" : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prevImage}
              className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 border border-white/30 text-white px-3 py-1 rounded-full text-2xl hover:bg-amber-500/80 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 border border-white/30 text-white px-3 py-1 rounded-full text-2xl hover:bg-amber-500/80 transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        <p className="text-white/90 text-sm lg:text-base leading-relaxed px-1">
          {text}
        </p>

        <div className="flex flex-wrap gap-2">{TechIcon}</div>
      </div>
    </div>
  );
}
