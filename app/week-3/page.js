import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-purple-200">
      <h1 className="text-2xl items-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}