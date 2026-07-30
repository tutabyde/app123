import {
  House,
  Grid2X2,
  ShoppingCart,
  Package,
  User,
} from "lucide-react";

const items = [
  {
    icon: House,
    label: "Inicio",
    active: true,
  },
  {
    icon: Grid2X2,
    label: "Categorías",
  },
  {
    icon: ShoppingCart,
    label: "Carrito",
  },
  {
    icon: Package,
    label: "Pedidos",
  },
  {
    icon: User,
    label: "Perfil",
  },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 flex w-full max-w-md -translate-x-1/2 justify-around border-t bg-white py-3">

      {items.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          className={`flex flex-col items-center text-xs ${
            active
              ? "text-violet-600"
              : "text-gray-500"
          }`}
        >
          <Icon size={22} />

          <span className="mt-1">
            {label}
          </span>
        </button>
      ))}

    </nav>
  );
}