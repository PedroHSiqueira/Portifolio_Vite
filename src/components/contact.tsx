"use client";

import { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight, Send, Download } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "pedrohenriquedoamaralsiqueira@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="relative py-16 sm:py-24 bg-white dark:bg-[#0c0d14] border-t border-slate-200 dark:border-white/[0.06] transition-colors scroll-mt-16">
      {/* Background soft glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-gradient-to-tr from-[#7f5af0]/15 to-purple-800/10 blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#7f5af0] uppercase">
            Entre em Contato
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Vamos construir algo juntos?
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            Estou disponível para novas oportunidades profissionais, desafios de engenharia backend e projetos colaborativos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Email Card (Principal) */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 p-5 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#131420] border border-slate-200/90 dark:border-white/[0.08] shadow-lg dark:shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3.5 sm:gap-4 text-center md:text-left flex-col md:flex-row w-full md:w-auto">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#7f5af0]/15 border border-[#7f5af0]/30 flex items-center justify-center text-[#7f5af0] shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-mono text-slate-500 dark:text-gray-400">E-mail Direto</p>
                <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white break-all">{email}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm dark:shadow-none dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-gray-200 dark:border-white/10 text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}?subject=Contato%20via%20Portfólio`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#7f5af0] hover:bg-[#6e46ec] text-white text-xs font-semibold shadow-lg shadow-[#7f5af0]/25 transition-all duration-200 active:scale-95 text-center"
              >
                <Send size={14} />
                <span>Enviar Mensagem</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/phasiqueira/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 hover:border-[#7f5af0]/50 dark:bg-[#12131e] dark:border-white/[0.06] dark:hover:border-[#7f5af0]/50 dark:hover:bg-[#161726] transition-all duration-300 flex items-center justify-between shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0a66c2]/15 border border-[#0a66c2]/30 flex items-center justify-center text-[#0a66c2] shrink-0">
                <FaLinkedin className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#7f5af0] transition-colors truncate">
                  LinkedIn
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 truncate">/in/phasiqueira</p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-400 dark:text-gray-500 group-hover:text-[#7f5af0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/PedroHSiqueira"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 hover:border-[#7f5af0]/50 dark:bg-[#12131e] dark:border-white/[0.06] dark:hover:border-[#7f5af0]/50 dark:hover:bg-[#161726] transition-all duration-300 flex items-center justify-between shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-slate-200/70 dark:bg-white/[0.06] border border-slate-300/80 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white shrink-0">
                <FaGithub className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#7f5af0] transition-colors truncate">
                  GitHub
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 truncate">@PedroHSiqueira</p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-400 dark:text-gray-500 group-hover:text-[#7f5af0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>

          {/* Curriculo Card */}
          <a
            href="./pdf/Curriculo.pdf"
            download
            className="group p-4 sm:p-6 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 hover:border-[#7f5af0]/50 dark:bg-[#12131e] dark:border-white/[0.06] dark:hover:border-[#7f5af0]/50 dark:hover:bg-[#161726] transition-all duration-300 flex items-center justify-between shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#7f5af0]/15 border border-[#7f5af0]/30 flex items-center justify-center text-[#7f5af0] shrink-0">
                <Download className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#7f5af0] transition-colors truncate">
                  Currículo PDF
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 truncate">Download Direto</p>
              </div>
            </div>
            <ArrowUpRight size={18} className="text-slate-400 dark:text-gray-500 group-hover:text-[#7f5af0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

