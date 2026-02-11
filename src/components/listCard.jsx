export function ListCard({ title, items }) {
  return (
    <div className="lg:w-fit w-full border-2 border-orange-500 rounded-lg p-6">
      <h3 className="text-xl text-center font-bold mb-4 text-amber-400">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
            <span className="text-white">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
