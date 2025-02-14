
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-friendship-light flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12"
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.div
            className="bg-friendship p-4 rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <HeartHandshake className="w-12 h-12 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <span className="px-4 py-1 rounded-full bg-friendship text-xs font-medium tracking-wider text-white uppercase">
              Día de la Amistad
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800"
          >
            Querida Nicol
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="space-y-6 text-center text-gray-600 text-lg leading-relaxed"
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
              Que nuestra amistad siga creciendo y fortaleciéndose con cada día que pasa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="text-xl text-friendship-dark font-semibold"
          >
            Con cariño, tu amigo
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
