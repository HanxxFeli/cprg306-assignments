
export default function Item({ name, quantity, category }) { 
    return ( 
        <li className="m-3 border-3 border-purple-800 rounded-lg p-5 hover:bg-purple-700 hover:text-white transition duration-300">
            <p className="mb-1">{name}</p>
            <p className="mb-1">{quantity}</p>
            <p className="mb-1">{category}</p>
        </li>
    )
}