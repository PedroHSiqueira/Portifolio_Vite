"use client";

import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const competencias = [
    "Engenharia de Software, Arquitetura e Padrões de Projeto (SOLID, Clean Architecture)",
    "Desenvolvimento de Aplicações e Algoritmos Avançados com foco em Java",
    "Modelagem, Administração e Otimização de Bancos de Dados Relacionais (SQL/PostgreSQL)",
    "Redes de Computadores, Conectividade, Sistemas Operacionais e Segurança",
    "Metodologias Ágeis (Scrum/Kanban) e Gerenciamento do Ciclo de Vida de Software",
    "Desenvolvimento de TCC voltado a sistema de gestão empresarial (ERP Vitrin)",
  ];

  return (
    <section id="formacao" className="relative py-16 sm:py-24 bg-slate-50 dark:bg-[#0c0d14] border-t border-slate-200 dark:border-white/[0.06] scroll-mt-16 overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[350px] bg-gradient-to-tr from-[#7f5af0]/15 to-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f5af0]/10 border border-[#7f5af0]/20 text-[#7f5af0] text-xs font-semibold uppercase tracking-wider">
            <GraduationCap size={13} />
            <span>Educação Superior</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Formação Acadêmica
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            Fundamentação teórica e prática sólida em computação, algoritmos e engenharia de software.
          </p>
        </div>

        {/* Main Degree Card with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white dark:bg-[#12131e] border border-slate-200/80 dark:border-white/[0.08] shadow-lg dark:shadow-2xl p-6 sm:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Photo Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-md lg:max-w-none">
                {/* Glow outline */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#7f5af0] via-purple-600 to-indigo-500 opacity-40 group-hover:opacity-75 blur-md transition duration-500" />

                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#181a28] border border-slate-200 dark:border-white/10 shadow-xl">
                  <img
                    src="/senac.jpg"
                    alt="UniSenac Pelotas - Análise e Desenvolvimento de Sistemas"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 dark:from-[#0c0d14]/90 via-transparent to-transparent opacity-80" />

                  {/* Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-sm font-bold tracking-tight">UniSenac Pelotas</p>
                    <p className="text-[11px] text-purple-300 dark:text-[#7f5af0] font-mono">Faculdade de Tecnologia Senac</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                  <Award size={13} />
                  <span>Graduado</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Análise e Desenvolvimento de Sistemas
                </h3>

                <div className="flex flex-wrap items-center justify-start gap-y-1.5 gap-x-4 text-xs sm:text-sm text-slate-500 dark:text-gray-400">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-gray-300 font-medium">
                    <BookOpen size={14} className="text-[#7f5af0]" />
                    UniSenac Pelotas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#7f5af0]" />
                    Pelotas, Rio Grande do Sul
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#7f5af0]" />
                    Ensino Superior
                  </span>
                </div>
              </div>

              <p className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Formação com ênfase no ciclo completo de desenvolvimento de software, estruturas de dados, modelagem relacional, arquitetura de sistemas e metodologias de entrega contínua.
              </p>

              {/* Competências adquiridas */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
                <h4 className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider text-left">
                  Conhecimentos & Competências Chave:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5 text-left">
                  {competencias.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300">
                      <CheckCircle2 size={14} className="text-[#7f5af0] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

