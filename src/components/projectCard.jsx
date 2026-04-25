import { useState } from "react";
import { GithubIcon, EyeSvg } from "./icons";

export function ProjectCard1({
  titleProject,
  images,
  text,
  TechIcon,
  github,
  demo,
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeImage = (newIndex) => {
    setFade(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 150);
  };

  const nextImage = () => changeImage((index + 1) % images.length);
  const prevImage = () =>
    changeImage((index - 1 + images.length) % images.length);

  return (
    <div className="mt-10  flex flex-col items-center">
      <h3 className="text-3xl text-center font-bold text-amber-400">
        {titleProject}
      </h3>

      <div className="relative  w-full flex justify-center">
        <div
          className="
            group relative rounded-2xl overflow-hidden bg-transparent p-2
            w-[90%] max-w-187.5
            h-100 lg:h-90 mt-2
            flex items-center justify-center
          "
        >
          <img
            className={`
              max-h-full max-w-full object-contain transition-opacity duration-200 rounded-2xl border-2 border-gray-800
              ${fade ? "opacity-0" : "opacity-100"}
            `}
            src={images[index]}
            alt={`${titleProject} screenshot`}
          />

          <button
            onClick={prevImage}
            className="
              cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 
              bg-black/60 border border-white/30 text-white px-3 py-1 
              rounded-full text-2xl opacity-0 group-hover:opacity-100 
              transition
            "
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="
              cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 
              bg-black/60 border border-white/30 text-white px-3 py-1 
              rounded-full text-2xl opacity-0 group-hover:opacity-100 
              transition
            "
          >
            ›
          </button>
        </div>
      </div>

      <p className="text-white/90 text-base leading-relaxed w-11/12 lg:w-8/12 text-center lg:text-left mb-6">
        {text}
      </p>

      <div className="w-11/12 lg:w-8/12 flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {TechIcon}
        </div>

        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              className="
                flex items-center gap-2 px-4 py-2 border border-white 
                rounded-xl bg-black/60 hover:bg-amber-600 transition
                text-white
              "
            >
              <GithubIcon width="22" height="22" /> Github
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              className="
                flex items-center gap-2 px-4 py-2 border border-white 
                rounded-xl bg-black/60 hover:bg-amber-600 transition text-white
              "
            >
              <EyeSvg width="22" height="22" /> Web
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
