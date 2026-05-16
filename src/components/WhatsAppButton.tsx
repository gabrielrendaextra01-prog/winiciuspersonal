import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5562999999999?text=Olá! Gostaria de agendar uma aula experimental de boxe."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-10 right-8 z-[100] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/20 cursor-pointer"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447l-6.308 1.654zm6.757-3.391c1.513.896 3.01 1.348 4.673 1.348 5.378 0 9.756-4.374 9.759-9.75.001-2.605-1.011-5.055-2.85-6.895-1.839-1.841-4.291-2.853-6.899-2.853-5.379 0-9.759 4.379-9.76 9.758 0 1.698.461 3.208 1.353 4.615l-.985 3.593 3.709-.976z"/>
      </svg>
    </motion.a>
  );
}
