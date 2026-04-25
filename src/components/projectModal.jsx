import { GithubIcon, EyeSvg } from "./icons";

export function ProjectModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50">
      <div
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-neutral-900 rounded-2xl p-6 w-full max-w-3xl
          max-h-[90vh] overflow-y-auto
        "
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-2xl hover:text-amber-400"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-amber-400 mb-4">{data.title}</h2>

        <p className="text-white/80 leading-relaxed mb-6">{data.text}</p>
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-wrap gap-2">{data.tech}</div>
          <div className="flex gap-2 ">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                className="flex items-center gap-2  text-white px-4 py-2 border border-white rounded-xl hover:bg-amber-600 transition"
              >
                <GithubIcon width="24" height="24" /> Github
              </a>
            )}

            {data.demo && (
              <a
                href={data.demo}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border text-white border-white rounded-xl hover:bg-amber-600 transition"
              >
                <EyeSvg width="24" height="24" /> Web
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {data.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl border border-white/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
