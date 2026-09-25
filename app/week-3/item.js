export default function Item({ item }) {
    const { name, quantity, category } = item;
    return (
        <li className="flex flex-col items-center justify-center p-1 bg-emerald-800/50 w-75 text-center border-2 border-emerald-900/90 rounded-sm">
            <h2 className="font-bold text-base">{name}</h2>
            <p>Buy: {quantity} in {category}</p>
        </li>
    )
}