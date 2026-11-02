export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li onClick={onSelect} 
    className="p-3 bg-pink-100 rounded-lg cursor-pointer hover:bg-pink-200">
      <h2 className="text-xl font-bold text-pink-800">
        {name}
      </h2>

      <p className="text-gray-600">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}