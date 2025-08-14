"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Code } from "lucide-react";

export default function Navbar() {
  const [clicado, setClicado] = useState(false);

  const abrirNavbar = () => {
    setClicado(!clicado);
  };
  return (
    <div className="fixed top-0 left-0 px-5 w-full z-50 bg-[#16161a] shadow-[0_20px_10px_-15px_rgba(0,0,0,0.1)]">
      <header className="flex items-center justify-between py-7 text-black">
        <div className="flex items-center gap-5">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-700 to-purple-950 rounded-full flex items-center justify-center">
            <Code className="w-4 h-4 text-white" />
          </div>
          <a href="#" className="text-2xl font-black text-[#7f5af0]">
            Pedro Siqueira<span className="text-white">.</span>
          </a>
        </div>
        <nav className="hidden gap-10 text-xl lg:flex items-center">
          <a
            className="text-[#fffffe] hover:text-[#7f5af0] scroll-smooth"
            href="#tecnologia"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#tecnologia");
              if (target) {
                const offset = 200;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
              }
            }}
          >
            Tecnologias
          </a>
          <a
            className="text-[#fffffe] hover:text-[#7f5af0]"
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#projetos");
              if (target) {
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
              }
            }}
          >
            Projetos
          </a>
          <div className="flex items-center gap-5">
            <a href="https://github.com/PedroHSiqueira" target="_blank" className="transition-colors duration-200 hover:text-[#7f5af0] text-[#fffffe]">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank" className="transition-colors duration-200 hover:text-[#7f5af0] text-[#fffffe]">
              <FaLinkedin size={30} />
            </a>
          </div>
          <div>
            <a download={true} href="./pdf/Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer bg-gray-200 p-3 text-sm text-center font-semibold text-black border-[#fffffe] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#5D3FD3] hover:text-[#fffffe]">
              Baixar Curriculo
            </a>
          </div>
        </nav>
        <div className="flex items-end lg:hidden">
          <button className="inline-flex items-center justify-center rounded-b-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={abrirNavbar}>
            {clicado ? (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" color="#fffffe" />
              </svg>
            ) : (
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" color="#fffffe" />
              </svg>
            )}
          </button>
        </div>
      </header>
      {clicado && (
        <div className="lg:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm-px-3">
            <a href="#about" className="flex flex-col justify-center text-[#fffffe] rounded py-2 px-3 text-base font-bold hover:text-[#5D3FD3]">
              Sobre mim
            </a>
            <a href="#tech" className="flex flex-col justify-center text-[#fffffe] rounded py-2 px-3 text-base font-bold hover:text-[#5D3FD3]">
              Tecnologias
            </a>
            <a href="#projetos" className="flex flex-col justify-center text-[#fffffe] rounded py-2 px-3 text-base font-bold hover:text-[#5D3FD3]">
              Projetos
            </a>
            <a href="https://github.com/PedroHSiqueira" target="_blank" className="flex flex-col justify-center text-[#fffffe] rounded py-2 px-3 text-base font-bold hover:text-[#5D3FD3]">
              Github
            </a>
            <a href="https://www.linkedin.com/in/phasiqueira/" target="_blank" className="flex flex-col justify-center text-[#fffffe] rounded py-2 px-3 text-base font-bold hover:text-[#5D3FD3]">
              Linkedin
            </a>
            <button className="p-5 bg-gray-200 font-semibold text-black">Baixar Curriculo</button>
          </div>
        </div>
      )}
    </div>
  );
}
