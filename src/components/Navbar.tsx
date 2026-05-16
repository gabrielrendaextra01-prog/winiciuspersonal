import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Planos', href: '#planos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center font-black text-xl italic translate-y-0.5">W</div>
              <span className="font-bold text-lg tracking-tighter uppercase">
                WINICIUS RONAN <span className="text-brand-red underline decoration-2 underline-offset-4">BOXE</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contato"
              className="text-brand-red text-[10px] font-bold uppercase tracking-widest underline decoration-2 underline-offset-4 hover:text-white transition-colors"
            >
              Fale no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-black border-b border-white/5 px-4 pt-2 pb-6 space-y-1"
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-brand-red hover:bg-white/5 rounded-md"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-brand-red hover:bg-blue-700 text-white px-6 py-4 rounded-sm font-bold uppercase tracking-widest transition-all mt-4"
          >
            Começar Agora
          </a>
        </motion.div>
      )}
    </nav>
  );
}
