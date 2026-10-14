import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-emerald-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-emerald-800 mb-8">Shopping List</h1>
      <ItemList />
    </main>
  );
}