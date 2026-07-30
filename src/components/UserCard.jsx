import {
  Smartphone,
  BadgeCheck,
  Wallet,
  CircleDollarSign,
} from "lucide-react";


export default function UserCard({ user }) {


  if (!user) {
    return (
      <div className="mt-6 rounded-3xl bg-white p-5 shadow">
        Cargando usuario...
      </div>
    );
  }



  return (
    <div className="mt-6 rounded-3xl bg-white p-5 shadow">


      <div className="grid grid-cols-2 gap-4">


        {/* CELULAR */}
        <div className="rounded-2xl bg-blue-50 p-4">


          <div className="flex items-center gap-2">

            <Smartphone
              className="text-blue-600"
              size={18}
            />

            <span className="text-sm text-gray-600">
              Celular
            </span>

          </div>


          <p className="mt-3 text-2xl font-bold text-blue-700">
            {user.phone}
          </p>


        </div>



        {/* ID INVITACIÓN */}
        <div className="rounded-2xl bg-violet-50 p-4">


          <div className="flex items-center gap-2">

            <BadgeCheck
              className="text-violet-600"
              size={18}
            />

            <span className="text-sm text-gray-600">
              ID Invitación
            </span>

          </div>


          <p className="mt-3 text-2xl font-bold text-violet-700">
            {user.invitationCode}
          </p>


        </div>



        {/* SALDO */}
        <div className="rounded-2xl bg-green-50 p-4">


          <div className="flex items-center gap-2">

            <Wallet
              className="text-green-600"
              size={18}
            />

            <span className="text-sm text-gray-600">
              Saldo
            </span>

          </div>


          <p className="mt-3 text-2xl font-bold text-green-700">
            S/ {Number(user.balance ?? 10).toFixed(2)}
          </p>


        </div>



        {/* GANANCIAS */}
        <div className="rounded-2xl bg-orange-50 p-4">


          <div className="flex items-center gap-2">

            <CircleDollarSign
              className="text-orange-500"
              size={18}
            />

            <span className="text-sm text-gray-600">
              Ganancias
            </span>

          </div>


          <p className="mt-3 text-2xl font-bold text-orange-600">
            S/ {Number(user.earnings ?? 0).toFixed(2)}
          </p>


        </div>



      </div>


    </div>
  );
}