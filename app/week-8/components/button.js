
const Button = ({onClick, buttonName, isActive=false, disabled=false, type="button"}) => { 
    // define base style 
    let buttonStyle = "px-4 py-2 rounded font-bold"

    // append styles depending on state 
    if (disabled) { 
    buttonStyle += " bg-gray-400 cursor-not-allowed text-gray-600"
    }
    else if (isActive) { 
        buttonStyle += " bg-purple-600 text-white shadow-lg"
    } 
    else { 
        buttonStyle += " bg-purple-200 text-purple-800 hover:bg-purple-600 hover:text-white transition-colors"
    }

    console.log(`${buttonName} styles:`, buttonStyle); // AND THIS
    
    return ( 
        <button 
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonStyle}
        >
            {buttonName}
        </button>
    )
}



export default Button;