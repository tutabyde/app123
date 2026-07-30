import banner from "../../assets/images/login-banner.png";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();
  return (
    <main className="min-h-screen flex justify-center bg-[linear-gradient(135deg,#f6ecff_0%,#fdf7ff_45%,#ffffff_100%)]">
      <div className="w-full max-w-sm px-6 py-10">

        {/* Bienvenida */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold text-gray-900">
            ¡Bienvenido!
          </h1>

          <p className="mt-2 text-gray-500">
            Inicia sesión para continuar
          </p>

        </div>

        {/* Teléfono */}

        <div className="mb-5">

          <label className="block text-sm font-medium mb-2">
            Teléfono
          </label>

          <input
            type="text"
            placeholder="Ingresa tu número"
            className="
              w-full
              h-12
              rounded-xl
              border
              border-gray-200
              px-4
              outline-none
              focus:border-purple-500
            "
          />

        </div>

        {/* Contraseña */}

        <div>

          <label className="block text-sm font-medium mb-2">
            Contraseña
          </label>

          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="
              w-full
              h-12
              rounded-xl
              border
              border-gray-200
              px-4
              outline-none
              focus:border-purple-500
            "
          />

        </div>

        {/* Olvidaste */}

        <div className="text-right mt-3">

          <button className="text-sm text-purple-600">
            ¿Olvidaste tu contraseña?
          </button>

        </div>

        {/* Botón */}

        <button
          className="
            w-full
            h-14
            mt-8
            rounded-2xl
            bg-black
            text-white
            text-lg
            font-semibold
          "
        >
          Iniciar sesión
        </button>

        {/* Separador */}

        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-px bg-gray-200"></div>

          <span className="text-gray-400 text-sm">
            o continúa con
          </span>

          <div className="flex-1 h-px bg-gray-200"></div>

        </div>

        {/* Tarjeta */}

        <div className="rounded-3xl bg-white shadow-md p-5">

          <img
            src={banner}
            alt=""
            className="w-24 mx-auto"
          />

          <h2 className="text-center text-xl font-bold mt-4">
            ¿No tienes cuenta?
          </h2>

          <p className="text-center text-gray-500 text-sm mt-2">
            Regístrate y descubre miles de productos a los mejores precios
          </p>

          <button
            onClick={() => navigate("/register")}
            className="
              w-full
              h-12
              mt-5
              rounded-xl
              border-2
              border-purple-600
              text-purple-600
              font-semibold
            "
          >
            Regístrate ahora
          </button>

        </div>

      </div>

    </main>
  );
}