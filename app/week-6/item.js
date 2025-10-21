const Item = ({name, quantity, category}) => { 
    return ( 
            <li className="border border-purple-400 rounded-lg p-4">
                <p className="mb-1">{name}</p>
                <p className="mb-1">Quantity: {quantity}</p>
                <p className="mb-1">Category: {category}</p>
            </li>
    )
}

export default Item