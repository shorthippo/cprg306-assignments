export default function Item({ item }) {
    const { name, quantity, category } = item;
    return (
        <li className="flex flex-col items-center justify-center p-2 bg-emerald-800/50 w-75 text-center border-2 border-black mb-4">
            <h2 className="font-bold text-2xl">{name}</h2>
            <p>Buy: {quantity} in {category}</p>
        </li>
    )
}