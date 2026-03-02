import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function FormNotice() {
  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center justify-center text-center" id="form-notice">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 flex flex-col items-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Preencha o Formulário abaixo para Testar
        </h3>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="bg-green-100 p-4 rounded-full"
        >
          <ArrowDown className="w-10 h-10 text-green-600" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </section>
  );
}
