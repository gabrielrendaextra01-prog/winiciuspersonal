import { motion } from 'motion/react';
import { Target, Zap, Shield, HeartPulse, Brain, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Foco & Disciplina",
    description: "Aprendizado rigoroso que ensina a importância da concentração no dia a dia e nos estudos."
  },
  {
    icon: Zap,
    title: "Queima Calórica",
    description: "Treinos intensos focados em emagrecimento rápido e aumento do metabolismo basal."
  },
  {
    icon: HeartPulse,
    title: "Saúde Cardiovascular",
    description: "Melhora significativa do fôlego, resistência e saúde do coração para o longo prazo."
  },
  {
    icon: Shield,
    title: "Autodefesa",
    description: "Aumento da noção espacial e técnicas básicas de defesa com responsabilidade."
  },
  {
    icon: Brain,
    title: "Saúde Mental",
    description: "Alívio de estresse e ansiedade comum na adolescência através da atividade física."
  },
  {
    icon: Trophy,
    title: "Autoestima",
    description: "Conquistar novos níveis físicos gera confiança para enfrentar qualquer desafio na vida."
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-brand-black border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Vantagens do Treino
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic mb-4"
          >
            MUITO ALÉM DA <span className="text-brand-red italic">TÉCNICA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-2xl text-xs uppercase tracking-tight mt-4"
          >
            O boxe é uma das atividades mais completas para o desenvolvimento físico e mental em qualquer etapa da vida.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-r border-b border-white/10 p-10 hover:bg-white/[0.02] transition-colors group relative"
            >
              <div className="text-4xl font-black italic text-zinc-900 group-hover:text-brand-red transition-colors mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase italic tracking-tighter">{benefit.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
