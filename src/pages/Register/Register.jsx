import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  Ticket,
  Phone,
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";


export default function Register() {

  const navigate = useNavigate();

  return (
    <main className="
      min-h-screen
      bg-gray-50
      flex
      justify-center
      items-center
      px-4
    ">

      <div className="
        w-full
        max-w-sm
        min-h-screen
        bg-white
        rounded-3xl
        shadow-sm
        px-6
        pt-8
        pb-10
      ">

        {/* Header */}

        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 mb-8"
        >
          <ArrowLeft size={26}/>
        </button>


        <section className="text-center">

          <h1 className="
            text-3xl
            font-bold
            text-gray-900
          ">
            Crear cuenta
          </h1>


          <p className="
            mt-2
            text-sm
            text-gray-500
          ">
            Completa la información para registrarte
          </p>

        </section>


        {/* Formulario */}

        <section className="mt-8 space-y-4">


          {/* Código invitación */}

          <InputBox
            icon={<Ticket size={22}/>}
            title="Código de invitación"
            placeholder="Ingresa tu código de invitación"
          />


          {/* Teléfono */}

          <InputBox
            icon={<Phone size={22}/>}
            title="Número de teléfono"
            placeholder="Ingresa tu número de teléfono"
          />


          {/* Password */}

          <InputBox
            icon={<Lock size={22}/>}
            title="Contraseña"
            placeholder="Ingresa tu contraseña"
            eye
          />


          <InputBox
            icon={<Lock size={22}/>}
            title="Confirmar contraseña"
            placeholder="Confirma tu contraseña"
            eye
          />


          <InputBox
            icon={<ShieldCheck size={22}/>}
            title="Contraseña de retiro"
            placeholder="Ingresa tu contraseña de retiro"
            eye
          />


          <InputBox
            icon={<ShieldCheck size={22}/>}
            title="Confirmar contraseña de retiro"
            placeholder="Confirma tu contraseña de retiro"
            eye
          />


        </section>



        {/* Botón */}

        <button
          className="
            mt-8
            w-full
            h-12
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-purple-500
            text-white
            font-semibold
            text-lg
          "
        >
          Registrarse
        </button>



        {/* Login */}

        <p className="
          text-center
          text-sm
          text-gray-500
          mt-6
        ">

          ¿Ya tienes cuenta?

          <button
            onClick={() => navigate("/login")}
            className="
              ml-1
              text-purple-600
              font-semibold
            "
          >
            Inicia sesión
          </button>

        </p>


      </div>


    </main>
  );
}




function InputBox({
  icon,
  title,
  placeholder,
  eye
}) {

  const [showPassword, setShowPassword] = useState(false);


  return (

    <div className="
      h-16
      border
      border-gray-200
      rounded-xl
      flex
      items-center
      px-4
      gap-3
    ">


      <div className="text-purple-600">
        {icon}
      </div>


      <div className="flex-1">


        <p className="
          text-xs
          text-gray-800
          font-medium
        ">
          {title}
        </p>



        <input

          type={
            eye
              ? showPassword
                ? "text"
                : "password"
              : "text"
          }


          placeholder={placeholder}


          className="
            w-full
            text-sm
            outline-none
            placeholder-gray-400
            text-gray-500
          "

        />


      </div>



      {
        eye && (

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >

            {
              showPassword
                ?
                <EyeOff
                  size={20}
                  className="text-gray-400"
                />
                :
                <Eye
                  size={20}
                  className="text-gray-400"
                />
            }


          </button>

        )
      }



    </div>

  );

}