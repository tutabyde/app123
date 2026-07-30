import { useNavigate, useSearchParams } from "react-router-dom";
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

  const [searchParams] = useSearchParams();

  const urlInvitation = searchParams.get("ref");

  const [invitationCode, setInvitationCode] = useState(urlInvitation || "");

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [withdrawPassword, setWithdrawPassword] = useState("");
  const [confirmWithdrawPassword, setConfirmWithdrawPassword] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!invitationCode || !phone || !password || !confirmPassword || !withdrawPassword || !confirmWithdrawPassword) {
      setError("Por favor completa todos los campos");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    if (withdrawPassword !== confirmWithdrawPassword) {
      setError("Las contraseñas de retiro no coinciden");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch('https://yoyo-defective-glutton.ngrok-free.dev/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          invitationCode,
          phone,
          password,
          withdrawPassword
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Error al registrarse');
        setLoading(false);
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      setSuccess(true);

      setTimeout(() => {
        navigate("/home");
      }, 1000);

    } catch (err) {
      setError('Error de conexión');
      setLoading(false);
    }
  };

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

        <button
          onClick={() => navigate(-1)}
          className="text-gray-700 mb-8"
          disabled={loading || success}
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

        <form onSubmit={handleRegister} className="mt-8 space-y-4">

          <InputBox
            icon={<Ticket size={22}/>}
            title="Código de invitación"
            placeholder="Ingresa tu código de invitación"
            value={invitationCode}
            onChange={(e) => setInvitationCode(e.target.value)}
            disabled={loading || success || !!urlInvitation}
          />

          <InputBox
            icon={<Phone size={22}/>}
            title="Número de celular"
            placeholder="Ingresa tu número de celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={loading || success}
          />

          <InputBox
            icon={<Lock size={22}/>}
            title="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
            eye
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading || success}
          />

          <InputBox
            icon={<Lock size={22}/>}
            title="Confirmar contraseña"
            placeholder="Confirma tu contraseña"
            type="password"
            eye
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={loading || success}
          />

          <InputBox
            icon={<ShieldCheck size={22}/>}
            title="Contraseña de retiro"
            placeholder="Ingresa tu contraseña de retiro"
            type="password"
            eye
            value={withdrawPassword}
            onChange={(e) => setWithdrawPassword(e.target.value)}
            disabled={loading || success}
          />

          <InputBox
            icon={<ShieldCheck size={22}/>}
            title="Confirmar contraseña de retiro"
            placeholder="Confirma tu contraseña de retiro"
            type="password"
            eye
            value={confirmWithdrawPassword}
            onChange={(e) => setConfirmWithdrawPassword(e.target.value)}
            disabled={loading || success}
          />

          {error && (
            <p className="
              text-center
              text-sm
              text-red-600
              font-semibold
              bg-red-100
              px-4
              py-3
              rounded-xl
            ">
              {error}
            </p>
          )}

          {success && (
            <p className="
              text-center
              text-sm
              text-green-600
              font-semibold
              bg-green-100
              px-4
              py-3
              rounded-xl
            ">
              ¡Registro exitoso!
            </p>
          )}

          <button
            type="submit"
            disabled={loading || success}
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
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>

        </form>

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
            disabled={loading || success}
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
  eye,
  type = "text",
  value,
  onChange,
  disabled = false
}) {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className={`
      h-16
      border
      border-gray-200
      rounded-xl
      flex
      items-center
      px-4
      gap-3
      ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
    `}>

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
              : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="
            w-full
            text-sm
            outline-none
            placeholder-gray-400
            text-gray-500
            disabled:bg-gray-50
            disabled:cursor-not-allowed
          "
        />

      </div>

      {
        eye && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
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