import { Code } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f13] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full flex items-center justify-center shadow-md">
            <Code className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">
            Pedro Siqueira <span className="text-[#7f5af0]">Dev</span>
          </span>
        </div>

        <div className="flex gap-5 text-gray-400">
          <a href="https://github.com/PedroHSiqueira" target="_blank" className="hover:text-[#7f5af0] transition">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank" className="hover:text-[#7f5af0] transition">
            <FaLinkedin size={20} />
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-gray-400 text-sm">© 2025 - 2026 Pedro Henrique Siqueira. Todos os direitos reservados.</p>

          <p className="text-gray-500 text-xs">
            Desenvolvido por{" "}
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank" className="hover:text-[#7f5af0] transition">
              Pedro Siqueira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
