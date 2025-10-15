import NewItem from "./new-item";

export default function Page() { 
    return ( 
        <div className="my-4 w-full flex justify-center">
            <div className="w-fit border rounded-2xl p-4 border-purple-500 flex flex-col items-center bg-gray-900">
                <h1>Week 5 Assignment</h1>
                <NewItem></NewItem>
            </div>
        </div>

    )
}