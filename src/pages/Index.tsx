import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake, Mail } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-friendship-light flex items-center justify-center p-4 sm:p-6">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group"
          >
            <div className="relative w-[280px] sm:w-[320px]">
              {/* Sobre principal */}
              <div className="bg-[#FFDEE2] shadow-xl aspect-[1.6/1] rounded-lg relative overflow-hidden">
                {/* Líneas diagonales del sobre */}
                <div 
                  className="absolute top-0 left-0 w-full h-full z-10"
                  style={{
                    background: 'linear-gradient(315deg, transparent 49.5%, #ffcbd1 49.5%, #ffcbd1 50.5%, transparent 50.5%), linear-gradient(45deg, transparent 49.5%, #ffcbd1 49.5%, #ffcbd1 50.5%, transparent 50.5%)'
                  }}
                />

                {/* Corazón central */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 bg-[#ea384c] rounded-full transform rotate-45">
                    <div className="w-full h-full relative">
                      <div className="absolute w-full h-full bg-[#ea384c] rounded-full -left-1/2"></div>
                      <div className="absolute w-full h-full bg-[#ea384c] rounded-full -top-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* Texto "Toca para abrir" */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                  <p className="text-friendship-dark text-lg sm:text-xl font-medium">
                    Toca para abrir
                  </p>
                </div>

                {/* Sombras suaves */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.05)]" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12"
          >
            <div className="flex flex-col items-center space-y-4 sm:space-y-6">
              <motion.div
                className="bg-friendship p-3 sm:p-4 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <HeartHandshake className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <span className="px-3 py-1 rounded-full bg-friendship text-xs font-medium tracking-wider text-white uppercase">
                  Día de la Amistad
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800"
              >
                Querida Melany
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="space-y-4 sm:space-y-6 text-center text-gray-600 text-base sm:text-lg leading-relaxed"
              >
                <p>
                  En este día especial, quiero expresarte lo agradecido que estoy de tenerte como amiga.
                  Tu amistad ilumina mis días y hace que cada momento compartido sea único y especial.
                </p>
                
                <p>
                  Gracias por estar siempre presente, por tu apoyo incondicional y por todas las risas
                  que hemos compartido juntos. Tu amistad es uno de los regalos más valiosos que tengo.
                </p>

                <p>
                  Que nuestra amistad siga creciendo como el fascismo y fortaleciéndose con cada día que pasa.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="text-lg sm:text-xl text-friendship-dark font-semibold"
              >
                Con cariño, tu amigo Harold :3
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
