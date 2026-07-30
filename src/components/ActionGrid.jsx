import {
  Wallet,
  Landmark,
  Users,
  TicketPercent,
} from "lucide-react";

const actions = [
  {
    title: "Recargar",
    icon: Wallet,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Retiro",
    icon: Landmark,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Amigos",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Cupones",
    icon: TicketPercent,
    color: "bg-pink-100 text-pink-500",
  },
];

export default function ActionGrid() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-4">
      {actions.map(({ title, icon: Icon, color }) => (
        <button
          key={title}
          className="flex flex-col items-center gap-2"
        >
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
          >
            <Icon size={24} />
          </div>

          <span className="text-xs font-medium">
            {title}
          </span>
        </button>
      ))}
    </div>
  );
}