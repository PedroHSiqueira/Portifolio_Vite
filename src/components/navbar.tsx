"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Code } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#16161a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-purple-900 rounded-full flex items-center justify-center shadow-md">
            <Code className="w-4 h-4 text-white" />
          </div>
          <a href="#" className="text-xl font-black text-[#7f5af0]">
            Pedro <span className="text-white">.</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-[#7f5af0] transition">
            Sobre
          </a>
          <a href="#tecnologia" className="text-gray-300 hover:text-[#7f5af0] transition">
            Tecnologias
          </a>
          <a href="#projetos" className="text-gray-300 hover:text-[#7f5af0] transition">
            Projetos
          </a>

          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/PedroHSiqueira" target="_blank" className="text-gray-300 hover:text-[#7f5af0] transition">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank" className="text-gray-300 hover:text-[#7f5af0] transition">
              <FaLinkedin size={22} />
            </a>
          </div>

          <a href="./pdf/Curriculo.pdf" download className="ml-4 px-4 py-2 rounded-lg bg-[#7f5af0] hover:bg-[#6b4ae0] transition text-sm font-medium">
            Currículo
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#16161a] border-t border-white/5 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            <a href="#about" className="text-gray-300 hover:text-[#7f5af0] transition">
              Sobre
            </a>
            <a href="#tecnologia" className="text-gray-300 hover:text-[#7f5af0] transition">
              Tecnologias
            </a>
            <a href="#projetos" className="text-gray-300 hover:text-[#7f5af0] transition">
              Projetos
            </a>

            <div className="flex gap-4 pt-2">
              <a href="https://github.com/PedroHSiqueira" target="_blank">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank">
                <FaLinkedin size={22} />
              </a>
            </div>

            <a href="./pdf/Curriculo.pdf" download className="mt-4 text-center px-4 py-2 rounded-lg bg-[#7f5af0] hover:bg-[#6b4ae0] transition">
              Baixar Currículo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
