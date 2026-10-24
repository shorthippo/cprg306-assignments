function Item ({name, quantity, category}) {
    return (
    <li className="bg-fuchsia-600 border-b-fuchsia-950 rounded-lg"> 
        <div className="font-bold">{name}</div>
        <div className="text-gray-600">{quantity}</div>
        <div className="text-gray-600">{category}</div>
    </li>
    )
}
export default Item;