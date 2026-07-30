import peruFlag from "../assets/images/peru.png";
import { Headphones, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-green-500"></div>

        <div>
          <h1 className="font-semibold">
            Centro Comercial En Línea
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-full border px-3 py-2">
            <img
                src={peruFlag}
                alt="Bandera de Perú"
                className="h-5 w-5 rounded-full object-cover"
            />

            <span>ES</span>

            <ChevronDown size={18} />
        </button>

        <Headphones
          className="text-violet-600"
          size={24}
        />
      </div>
    </header>
  );
}