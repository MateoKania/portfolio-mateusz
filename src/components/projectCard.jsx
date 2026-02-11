import { useState } from "react";

export function ProjectCard1({ titleProject, images, text, TechIcon }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((next) => (next + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="mt-15 mb-5 lg:mb-10 flex flex-col">
        <h3 className="lg:text-3xl px-4 text-2xl text-center font-bold mb-4 lg:mb-6 text-amber-400">
          {titleProject}
        </h3>
        <div className="flex flex-col lg:flex-row lg:w-8/12 w-11/12 justify-center items-center space-y-2 lg:space-y-0 lg:space-x-5 mx-auto ">
          <div className="relative w-full lg:w-6/12">
            <img
              className="
           h-auto lg:h-70 flex items-center rounded-2xl border-2 w-full object-cover border-white "
              src={images[index]}
              alt="Fotos Web"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 lg:px-3 py-1 rounded-full text-xl lg:text-2xl hover:bg-black/70"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white lg:px-3 px-2 py-1 rounded-full text-xl lg:text-2xl hover:bg-black/70"
            >
              ›
            </button>
          </div>
          <div className="flex w-full lg:w-6/12 px-4 lg:px-0">
            <p className="text-white text-sm lg:text-base lg:h-70 h-auto flex leading-relaxed ">
              {text}
            </p>
          </div>
        </div>
        <div>{TechIcon}</div>
      </div>
    </>
  );
}
