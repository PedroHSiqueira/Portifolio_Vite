import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#18181b] shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.1)] py-8">
      <div className="container mx-auto text-center">
      <div className="flex items-center justify-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-700 to-purple-950 rounded-full flex items-center justify-center">
          <Code className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-semibold">Pedro Siqueira Dev</span>
      </div>
      <p className="text-blue-200 text-sm">© 2025 Pedro Henrique Siqueira. Todos os direitos Reservados</p>
      <p className="text-white text-xs mt-2">
        Desenvolvido por <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Pedro Siqueira ❣️</a>
      </p>
      </div>
    </footer>
  );
}
