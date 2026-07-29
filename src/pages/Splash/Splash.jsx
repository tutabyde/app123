import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a /home después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center px-6 z-10">
        
        {/* Logo/Título animado */}
        <h1 className="text-7xl font-black text-gray-900 mb-6 text-center animate-fade-in">
          SHEIN
        </h1>

        {/* Tagline */}
        <p className="text-lg text-gray-700 text-center font-medium mb-4 animate-fade-in-delay">
          Tu estilo. Tu experiencia.
        </p>

        {/* Línea decorativa */}
        <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-fade-in-delay-2"></div>
      </div>

      {/* Indicador de carga */}
      <div className="absolute bottom-12 flex justify-center gap-2">
        <div 
          className="w-2.5 h-2.5 bg-purple-600 rounded-full"
          style={{
            animation: 'bounce 1.5s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="w-2.5 h-2.5 bg-purple-600 rounded-full"
          style={{
            animation: 'bounce 1.5s ease-in-out infinite',
            animationDelay: '0.3s'
          }}
        ></div>
        <div 
          className="w-2.5 h-2.5 bg-purple-600 rounded-full"
          style={{
            animation: 'bounce 1.5s ease-in-out infinite',
            animationDelay: '0.6s'
          }}
        ></div>
      </div>

      {/* Estilos CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.6;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeInDelayed 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeInDelayed 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
}