const TextField = ({labelName, value, onChange}) => { 
    return ( 
        <div className="mt-2 flex justify-center">
            <label className="mr-2">{labelName}</label>
            <input className="border border-purple-500 rounded"
                required 
                type="text" 
                value={value} 
                onChange={onChange}>
            </input>
        </div>
    )
}

export default TextField