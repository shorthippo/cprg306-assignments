export default function Item({ item, onSelect }) {
    const { name, quantity, category } = item;
    return (
        <li
            onClick={onSelect}
            className="cursor-pointer flex flex-col items-center justify-center p-1 bg-emerald-800/50 w-75 text-center border-2 border-emerald-900/90 rounded-3xl"
        >
            <h2 className="font-bold text-base">{name}</h2>
            <p>Buy: {quantity} in {category}</p>
        </li>
    )
}