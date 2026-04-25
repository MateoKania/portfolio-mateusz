export function SmallProjectCard({ title, image, short, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-neutral-900 rounded-2xl p-4 border border-white/10 hover:border-amber-400 transition group"
    >
      <img
        src={image}
        className="rounded-xl mb-4 group-hover:opacity-80 transition"
      />

      <h3 className="text-xl font-bold text-amber-400 mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{short}</p>
    </div>
  );
}
