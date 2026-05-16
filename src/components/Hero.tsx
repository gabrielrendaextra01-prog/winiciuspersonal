import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden border-b border-white/10">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1920&auto=format&fit=crop"
          alt="Boxing heavy bag training"
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full flex items-center justify-center lg:justify-start">
        <div className="max-w-3xl w-full text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-brand-red font-bold text-xs uppercase tracking-[0.3em] mb-6">
              Treinamento de Elite • Goiânia
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-black italic uppercase leading-[0.9] mb-8 tracking-tighter">
              FORÇA <br />
              <span className="text-brand-red italic">DISCIPLINA</span> <br />
              EVOLUÇÃO
            </h1>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 border-l-2 lg:border-l-2 border-brand-red lg:pl-6 py-1">
              Aulas particulares de boxe em Goiânia focadas em condicionamento físico, 
              emagrecimento e disciplina inabalável para todas as idades — de crianças a adultos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center lg:justify-start">
              <a
                href="#contato"
                className="group flex items-center justify-center sm:justify-between gap-4 bg-brand-red hover:bg-blue-700 text-white px-8 py-5 text-sm font-bold uppercase italic tracking-widest transition-all"
              >
                Agende aula experimental
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#como-funciona" 
                className="flex items-center justify-center gap-3 border border-white/10 sm:border-l-0 bg-white/5 hover:bg-white/10 text-white px-8 py-5 text-sm font-bold uppercase italic tracking-widest transition-all"
              >
                Ver Metodologia
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-20 border border-white/10"
          >
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-3xl md:text-5xl font-black italic tracking-tighter">10+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-2">ANOS DE EXPERIÊNCIA</p>
            </div>
            <div className="p-8 border-b sm:border-b-0 sm:border-r border-white/10">
              <p className="text-3xl md:text-5xl font-black italic tracking-tighter">500+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-2">ALUNOS TRANSFORMADOS</p>
            </div>
            <div className="p-8">
              <p className="text-3xl md:text-5xl font-black italic tracking-tighter">GOIÂNIA</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mt-2">LOCALIZAÇÃO PREMIUM</p>
            </div>
          </motion.div>
        </div>

        {/* Professor Image - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:block absolute right-0 bottom-0 h-full w-1/2 overflow-hidden pointer-events-none"
        >
          <img 
            src="https://i.imgur.com/KLA6xp3.png" 
            alt="Professor Winicius Ronan" 
            className="h-full w-full object-cover object-top grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Decorative side text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-90 hidden xl:block">
        <span className="text-[140px] font-black italic text-white/[0.02] whitespace-nowrap select-none tracking-tighter uppercase">
          PERFORMANCE • DISCIPLINA • PERFORMANCE • DISCIPLINA
        </span>
      </div>
    </section>
  );
}
