import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';

const plans = [
  {
    name: "Aula Avulsa",
    price: "80",
    period: "/aula",
    description: "Ideal para quem quer conhecer o método sem compromisso.",
    features: [
      "Aula de 60 minutos",
      "Equipamentos inclusos",
      "Avaliação técnica básica",
      "Foco em fundamentos"
    ],
    highlight: false,
    cta: "Agendar agora"
  },
  {
    name: "Mensalidade",
    price: "250",
    period: "/mês",
    description: "2x por semana. O plano perfeito para manter a consistência.",
    features: [
      "8 aulas por mês",
      "Acompanhamento de peso",
      "Plano nutricional básico",
      "Suporte via WhatsApp",
      "Frequência ideal"
    ],
    highlight: true,
    cta: "Escolher Plano"
  },
  {
    name: "Pacote Trimestral",
    price: "600",
    period: "/total",
    description: "Para quem está decidido em mudar de vida e economizar.",
    features: [
      "24 aulas no total",
      "Avaliação física completa",
      "Camiseta exclusiva",
      "Prioridade na agenda",
      "Melhor custo-benefício"
    ],
    highlight: false,
    cta: "Garantir Vaga"
  }
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 bg-brand-black relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Investimento
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black italic mb-4">
            PACOTES <span className="text-brand-red italic">DISPONÍVEIS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-zinc-900 border-r border-white/10 last:border-r-0 p-12 flex flex-col hover:bg-zinc-800 transition-colors ${
                plan.highlight ? 'border-l-4 border-l-brand-red' : ''
              }`}
            >
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter">{plan.name}</h3>
                  {plan.name === "Pacote Trimestral" && (
                    <span className="text-brand-red font-black italic text-xs">-15% OFF</span>
                  )}
                </div>
                <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black italic tracking-tighter">R$ {plan.price}</span>
                <span className="text-zinc-500 text-xs font-bold uppercase italic">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-brand-red" />
                    <span className="text-[10px] text-zinc-300 font-bold uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className={`w-full py-4 text-center font-bold uppercase italic tracking-widest text-xs transition-all ${
                  plan.highlight
                    ? 'bg-brand-red text-white'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
