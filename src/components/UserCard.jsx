import {
  Smartphone,
  BadgeDollarSign,
  Wallet,
  CircleDollarSign,
} from "lucide-react";

import { user } from "../data/user";

export default function UserCard() {
  return (
    <div className="mt-6 rounded-3xl bg-white p-5 shadow">

      <div className="space-y-3">

        <div className="flex items-center gap-3">
          <Smartphone
            size={20}
            className="text-violet-600"
          />

          <span className="font-semibold">
            {user.phone}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <BadgeDollarSign
            size={20}
            className="text-orange-500"
          />

          <span>ID {user.id}</span>
        </div>

      </div>

      <div className="my-5 h-px bg-gray-200" />

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-violet-50 p-4">

          <div className="flex items-center gap-2">

            <Wallet
              className="text-violet-600"
              size={18}
            />

            <span className="text-sm">
              Saldo
            </span>

          </div>

          <p className="mt-3 text-2xl font-bold text-violet-700">
            S/ {user.balance.toFixed(2)}
          </p>

        </div>

        <div className="rounded-2xl bg-orange-50 p-4">

          <div className="flex items-center gap-2">

            <CircleDollarSign
              className="text-orange-500"
              size={18}
            />

            <span className="text-sm">
              Ganancias
            </span>

          </div>

          <p className="mt-3 text-2xl font-bold text-orange-600">
            S/ {user.earnings.toFixed(2)}
          </p>

        </div>

      </div>

    </div>
  );
}