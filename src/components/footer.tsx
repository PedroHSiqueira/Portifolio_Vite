import { Terminal, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#09090d] border-t border-slate-200 dark:border-white/[0.06] py-10 sm:py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7f5af0] to-[#5b36d6] flex items-center justify-center shadow-md shadow-[#7f5af0]/20">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            Pedro Henrique <span className="text-[#7f5af0] font-mono text-xs">/ Backend Dev</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-600 dark:text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Pedro Henrique Siqueira.
        </p>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/PedroHSiqueira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/phasiqueira/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
          >
            <FaLinkedin size={18} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06] transition cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

