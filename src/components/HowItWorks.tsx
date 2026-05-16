import { motion } from 'motion/react';
import { MessageSquare, ClipboardCheck, Dumbbell, Star } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "1. Contato Inicial",
    description: "Você entra em contato via WhatsApp ou formulário para agendar seu primeiro encontro.",
    color: "bg-blue-500"
  },
  {
    icon: ClipboardCheck,
    title: "2. Avaliação Física",
    description: "Realizamos uma análise completa para entender seus objetivos, limites e histórico de saúde.",
    color: "bg-brand-red"
  },
  {
    icon: Dumbbell,
    title: "3. Treinos Dinâmicos",
    description: "Aulas personalizadas focadas em técnica, cardio e queima de gordura de forma motivadora.",
    color: "bg-orange-500"
  },
  {
    icon: Star,
    title: "4. Resultados Reais",
    description: "Acompanhamento constante da evolução para garantir que você atinja sua melhor versão.",
    color: "bg-yellow-500"
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-brand-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            O Processo
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black italic mb-4">
            SEU CAMINHO <span className="text-brand-red italic underline decoration-4 underline-offset-8">ATÉ A VITÓRIA</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-10 border-r border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-8 rounded-full border border-brand-red flex items-center justify-center text-xs font-bold text-brand-red">
                  {index + 1}
                </span>
                <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-300">{step.title.split('. ')[1]}</h3>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-tight">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
