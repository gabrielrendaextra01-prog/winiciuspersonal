import { Instagram, Facebook, Youtube, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">
        © 2026 WINICIUS RONAN • GOIÂNIA, GO • SETOR BUENO
      </div>
      
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] uppercase font-bold text-zinc-300">Online agora</span>
        </div>
        <div className="flex gap-3">
          <a href="#" className="w-8 h-8 border border-zinc-800 rounded flex items-center justify-center text-[10px] hover:border-brand-red transition-all cursor-pointer">IG</a>
          <a href="#" className="w-8 h-8 border border-zinc-800 rounded flex items-center justify-center text-[10px] hover:border-brand-red transition-all cursor-pointer">FB</a>
          <a href="#" className="w-8 h-8 border border-zinc-800 rounded flex items-center justify-center text-[10px] hover:border-brand-red transition-all cursor-pointer">YT</a>
        </div>
      </div>
    </footer>
  );
}
