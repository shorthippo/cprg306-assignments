export default function Item( {item} ) {
    const { name, quantity, category } = item;
    return (
        <section className="flex justify-center items-center">
            <ul className="p-2 bg-pink-500/65 rounded-2xl w-100 text-center border-2 border-black">
                <li><h2 className="font-bold text-2xl">{name}</h2></li>
                <li><h2>grab: {quantity}</h2></li>
                <li><h2>find this item in {category}</h2></li>
            </ul>
        </section>
    )
}