const Button = ({type = "button", onClick, disabled, buttonName}) => { 
    return ( 
        <button 
            type={type}
            onClick={onClick} 
            disabled={disabled} 
            className={`font-bold m-4 py-2 px-4 rounded 
                ${disabled
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-purple-500 text-white hover:bg-purple-700"}`}
        >
            {buttonName}
        </button>
    )
}

export default Button