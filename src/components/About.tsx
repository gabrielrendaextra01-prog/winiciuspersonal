import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const credentials = [
    "Professor de Boxe Profissional",
    "Especialista em Performance Juvenil",
    "+10 Anos de Experiência no Ringue",
    "Foco em Emagrecimento e Disciplina",
    "Atendimento Exclusivo em Goiânia"
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-black border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative border-r border-white/10"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden bg-zinc-900">
              <img
                src="https://i.imgur.com/KLA6xp3.png"
                alt="Winicius Ronan - Professor de Boxe"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute top-0 left-0 bg-brand-red text-white p-6 z-20 italic">
              <p className="font-black text-5xl leading-none tracking-tighter">W</p>
              <p className="text-[10px] uppercase tracking-widest font-bold mt-1">Ronan</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-12 lg:p-16 flex flex-col justify-center"
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-6">
              O Treinador
            </span>
            <h2 className="text-4xl md:text-5xl font-black italic mb-8 tracking-tighter leading-none">
              MUITO PRAZER,<br />
              SOU <span className="text-brand-red italic underline decoration-4 underline-offset-8">WINICIUS RONAN</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed mb-10">
              <p>
                Minha missão é simples: usar o boxe como ferramenta de transformação. 
                Ao longo de mais de uma década, vi como a disciplina do ringue ajuda 
                alunos de todas as idades a superarem a obesidade, a ansiedade e o sedentarismo.
              </p>
              <p>
                Atendo desde crianças e adolescentes em desenvolvimento até adultos 
                que buscam alta performance ou qualidade de vida. No meu treino, o emagrecimento 
                é consequência natural de um estilo de vida focado em disciplina.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-3 border-b border-white/5">
                  <div className="w-1.5 h-1.5 bg-brand-red rotate-45" />
                  <span className="text-[10px] font-bold text-zinc-200 uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
