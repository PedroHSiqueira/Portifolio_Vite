"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Terminal, Menu, X, Download, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Formação", href: "#formacao" },
    { name: "Tecnologias", href: "#tecnologia" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-white/85 dark:bg-[#0c0d14]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#7f5af0] to-[#5b36d6] flex items-center justify-center shadow-lg shadow-[#7f5af0]/25 group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-[#7f5af0] transition-colors">
              Pedro<span className="text-[#7f5af0]">.dev</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-gray-400 leading-tight">Backend Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
            className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.06] border border-slate-200/60 dark:border-white/[0.06] transition-all duration-200 cursor-pointer active:scale-95"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-amber-400" />
            ) : (
              <Moon size={18} className="text-[#7f5af0]" />
            )}
          </button>

          <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200 dark:border-white/10">
            <a
              href="https://github.com/PedroHSiqueira"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Pedro"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
            >
              <FaGithub size={19} />
            </a>
            <a
              href="https://www.linkedin.com/in/phasiqueira/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Pedro"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
            >
              <FaLinkedin size={19} />
            </a>
          </div>

          <a
            href="./pdf/Curriculo.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7f5af0] hover:bg-[#6e46ec] text-white text-xs font-semibold tracking-wide uppercase shadow-lg shadow-[#7f5af0]/20 hover:shadow-[#7f5af0]/35 transition-all duration-200 active:scale-95"
          >
            <Download size={14} />
            <span>Currículo</span>
          </a>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema claro/escuro"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.06] transition cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-amber-400" />
            ) : (
              <Moon size={20} className="text-[#7f5af0]" />
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Alternar Menu"
            className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {open && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0c0d14]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/[0.08] px-4 sm:px-6 py-5 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.06] transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href="https://github.com/PedroHSiqueira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06]"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/phasiqueira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/[0.06]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>

              <a
                href="./pdf/Curriculo.pdf"
                download
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#7f5af0] text-white text-xs font-semibold uppercase"
              >
                <Download size={13} />
                Currículo
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


