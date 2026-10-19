export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white p-4 mb-4 rounded-xl shadow">
      <h2 className="text-xl font-bold text-blue-800">
        {name}
      </h2>

      <p className="text-gray-600">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}