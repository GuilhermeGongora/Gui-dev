import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Features() {
  const features = [
    { title: "Rápido", description: "Carregamento otimizado e suave." },
    { title: "Responsivo", description: "Funciona em qualquer dispositivo." },
    { title: "Interativo", description: "Experiência dinâmica e envolvente." },
  ];

  return (
    <section className="py-16 px-8 bg-black text-white">
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: -100 }} // Movimentação inicial maior
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeInOut" }} // Duração aumentada e ease mais suave
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-white-800 to-slate-700 p-8 rounded-3xl shadow-xl border border-slate-600 text-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.1,
              y: -5,
              boxShadow: "0px 15px 20px rgba(255, 255, 255, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
            <p className="text-gray-300 mt-4 text-lg">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
