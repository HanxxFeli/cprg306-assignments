import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Shopping List</h1>
        <ItemList />
      </div>  
    </main>
  );
}