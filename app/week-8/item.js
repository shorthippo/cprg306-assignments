export default function Item( {item, onSelect} ) {
    const { name, quantity, category } = item;
    return (
        <section className="flex justify-center items-center" onClick={() => onSelect(item)}>
            <ul className="p-2 bg-pink-500/65 rounded-2xl w-100 text-center border-2 border-black">
                <li><h2 className="font-bold text-2xl">{name}</h2></li>
                <li><h2>qty: {quantity}</h2></li>
                <li><h2>{category} item</h2></li>
            </ul>
        </section>
    )
}