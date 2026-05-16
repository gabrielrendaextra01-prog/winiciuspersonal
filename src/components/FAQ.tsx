import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Preciso ter experiência ou equipamento para começar?",
    answer: "Não! Nas primeiras aulas, eu forneço todo o equipamento necessário (luvas e bandagens). Com o tempo, oriento na compra do seu próprio kit pessoal por questões de higiene e conforto."
  },
  {
    question: "A partir de qual idade posso treinar?",
    answer: "Atendo crianças a partir de 8 anos, adolescentes e adultos de todas as idades. O treino é totalmente personalizado para o seu nível físico atual e seus objetivos específicos."
  },
  {
    question: "O treino de boxe é perigoso?",
    answer: "Trabalhamos o boxe fitness e técnico. O foco é no condicionamento, emagrecimento e técnica. Não há sparring (combate) obrigatório entre alunos, o que torna o treino extremamente seguro."
  },
  {
    question: "Em quanto tempo verei resultados no emagrecimento?",
    answer: "A queima calórica no boxe é altíssima (até 800kcal/hora). Com frequência de 2x a 3x por semana e alimentação equilibrada, os primeiros meses já trazem mudanças visíveis na balança e disposição."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-black border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Dúvidas Frequentes
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black italic mb-4">
            INFO <span className="text-brand-red italic underline decoration-4 underline-offset-8">ÚTIL</span>
          </h2>
        </div>

        <div className="border border-white/10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-white/10 last:border-b-0"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-xs font-black uppercase italic tracking-widest">{faq.question}</span>
                <span className={`text-brand-red text-xl font-black italic transition-transform ${activeIndex === index ? 'rotate-45' : ''}`}>+</span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-zinc-500 text-xs uppercase tracking-tight leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
