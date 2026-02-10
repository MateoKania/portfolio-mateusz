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
      <div className="mt-15 mb-10 flex flex-col">
        <h3 className="text-3xl text-center font-bold mb-4 text-amber-400">
          {titleProject}
        </h3>
        <div className="flex flex-row w-8/12 justify-center items-center space-x-5 mx-auto ">
          <div className="relative w-6/12">
            <img
              className=" 
           h-70 flex items-center rounded-2xl border-2 border-white "
              src={images[index]}
              alt="Fotos Web"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
            >
              ›
            </button>
          </div>
          <div className="flex w-6/12">
            <p className="text-white h-70 flex ">{text}</p>
          </div>
        </div>
        <div>{TechIcon}</div>
      </div>
    </>
  );
}
