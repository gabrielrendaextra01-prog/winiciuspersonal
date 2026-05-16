import { motion } from 'motion/react';
import { Send, MapPin, Phone, Instagram } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-brand-black relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-12 lg:p-16 border-r border-white/10"
          >
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs block mb-8">
              Contato
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic mb-10 tracking-tighter leading-none">
              ESTÁ PRONTO<br />
              PARA <span className="text-brand-red italic underline decoration-4 underline-offset-8">LUTAR?</span>
            </h2>
            
            <div className="space-y-8 mt-16 max-w-sm">
              <div className="flex items-start gap-5">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-500">Onde estamos</h4>
                  <p className="text-xs font-bold uppercase tracking-tight mt-1">Setor Bueno / Goiânia, GO</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-500">WhatsApp Direto</h4>
                  <p className="text-xs font-bold uppercase tracking-tight mt-1">(62) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Instagram className="w-5 h-5 text-brand-red shrink-0" />
                <div>
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-zinc-500">Siga no Insta</h4>
                  <p className="text-xs font-bold uppercase tracking-tight mt-1">@winiciusronan_boxe</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.01] p-12 lg:p-16 relative overflow-hidden"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                <div className="w-20 h-20 bg-brand-red flex items-center justify-center italic font-black text-4xl">W</div>
                <div>
                  <h3 className="text-3xl font-black italic tracking-tighter mb-4">MENSAGEM ENVIADA!</h3>
                  <p className="text-zinc-500 text-xs uppercase tracking-tight max-w-xs mx-auto">
                    Obrigado pelo interesse. Em breve entrarei em contato para agendarmos sua primeira aula.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] hover:underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-xs font-black italic uppercase tracking-widest mb-12 border-l-2 border-brand-red pl-4">
                  Aula Experimental Gratuita
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">Nome do Aluno</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-brand-black border border-white/5 p-4 text-xs font-medium outline-none focus:border-brand-red transition-colors uppercase tracking-tight"
                      placeholder="NOME COMPLETO"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">WhatsApp</label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-brand-black border border-white/5 p-4 text-xs font-medium outline-none focus:border-brand-red transition-colors uppercase tracking-tight"
                      placeholder="(62) 90000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600">Qual seu objetivo?</label>
                  <textarea
                    rows={4}
                    className="w-full bg-brand-black border border-white/5 p-4 text-xs font-medium outline-none focus:border-brand-red transition-colors uppercase tracking-tight resize-none"
                    placeholder="EX: EMAGRECIMENTO, DISCIPLINA..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-blue-700 text-white p-6 text-sm font-black italic uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex justify-between items-center"
                >
                  {isSubmitting ? 'ENVIANDO...' : 'SOLICITAR VAGA AGORA'}
                  {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
