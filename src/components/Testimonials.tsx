import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Santos",
    age: "16 anos",
    content: "Comecei com o Winicius para perder peso e acabei descobrindo uma paixão. Em 4 meses perdi 8kg e minha disposição na escola melhorou demais.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marta Oliveira",
    age: "Mãe do Pedro (12 anos)",
    content: "O Pedro era muito tímido e sofria com o sedentarismo. O Winicius é muito paciente e soube motivar ele da forma certa. Hoje ele é outra criança, mais seguro e saudável.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Leonardo Lima",
    age: "14 anos",
    content: "Treinar boxe me deu muito foco. O Winicius cobra bastante técnica e disciplina, e isso me ajudou muito a ter mais paciência e autocontrole nas dificuldades.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-brand-black border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-4"
          >
            Voz dos Campeões
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black italic mb-4">
            RELATOS DE <span className="text-brand-red italic">EVOLUÇÃO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] p-12 border-r border-white/10 last:border-r-0 hover:bg-white/[0.04] transition-colors flex flex-col"
            >
              <p className="text-zinc-300 italic text-sm mb-10 relative z-10 leading-relaxed border-l-2 border-brand-red pl-6">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover grayscale opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest">{item.name}</h4>
                  <p className="text-[10px] text-brand-red uppercase font-bold tracking-[0.2em]">{item.age}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
