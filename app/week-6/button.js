const Button = ({onClick, buttonName, isActive}) => { 
    return ( 
        <button 
            onClick={onClick}
            className={`px-4 py-2 rounded ${
                isActive 
                ? "bg-purple-600 text-white" 
                : "bg-purple-100 text-black"
            }`}
        >
            {buttonName}
        </button>
    )
}

export default Button