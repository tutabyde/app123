import { Search, ScanLine } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="mt-6 flex items-center rounded-xl border bg-white px-4 py-3">

      <Search
        className="text-gray-400"
        size={20}
      />

      <input
        className="ml-3 flex-1 outline-none"
        placeholder="Buscar productos, categorías..."
      />

      <ScanLine
        className="text-gray-500"
        size={22}
      />

    </div>
  );
}