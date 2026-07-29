import onboarding from "../../assets/images/onboarding.png";

export default function Onboarding() {
  return (
    <main className="
    min-h-screen
    flex
    justify-center
    bg-gradient-to-br
    from-purple-100
    via-pink-50
    to-white
  ">

      <div className="w-full max-w-sm flex flex-col">

        {/* Header */}

        <section className="pt-12 px-8 text-center">

          <p className="text-purple-600 font-semibold text-lg tracking-wide">
            SHEIN
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
            Compra desde
            <br />
            cualquier lugar
          </h1>

          <p className="mt-4 text-gray-500 text-sm">
            Miles de productos disponibles
            <br />
        
          </p>

        </section>

        {/* Imagen */}

        <section className="flex-1 flex items-center justify-center px-8">

          <img
            src={onboarding}
            alt="APP123"
            className="w-full max-w-xs object-contain"
          />

        </section>

        {/* Footer */}

        <section className="px-8 pb-10">

          <div className="flex justify-center gap-3 mb-8">

            <div className="w-3 h-3 rounded-full bg-black"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

            <div className="w-3 h-3 rounded-full bg-gray-300"></div>

          </div>

          <button
            className="
            w-full
            h-14
            rounded-2xl
            bg-black
            text-white
            font-semibold
            text-lg
            "
          >
            Siguiente
          </button>

          <button
            className="
            w-full
            mt-5
            text-gray-500
            font-medium
            "
          >
            Omitir
          </button>

        </section>

      </div>

    </main>
  );
}