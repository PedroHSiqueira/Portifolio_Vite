"use client";

import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface Experiencia {
  id: number;
  cargo: string;
  empresa: string;
  tipo: string;
  periodo: string;
  duracao: string;
  local: string;
  modalidade: string;
  atual: boolean;
  descricao: string;
  atividades: string[];
  techs: string[];
}

const experiencias: Experiencia[] = [
  {
    id: 1,
    cargo: "Técnico de Suporte em TI",
    empresa: "Osirnet",
    tipo: "Tempo integral",
    periodo: "set. de 2026 - o momento",
    duracao: "Atual",
    local: "Pelotas, RS",
    modalidade: "Presencial",
    atual: true,
    descricao:
      "Responsável pela manutenção, estabilidade e disponibilidade do ambiente tecnológico e infraestrutura de redes da organização, atuando diretamente no troubleshooting e suporte a usuários.",
    atividades: [
      "Diagnóstico e resolução ágil de incidentes em hardware, software, sistemas operacionais e redes",
      "Configuração, homologação e manutenção de ativos de rede e equipamentos de TI",
      "Monitoramento e acompanhamento de chamados técnicos, minimizando impactos operacionais",
      "Atuação orientada à resolução analítica de problemas, segurança e disponibilidade de serviços",
    ],
    techs: ["Redes", "Infraestrutura", "Troubleshooting", "Sistemas Operacionais", "Hardware"],
  },
  {
    id: 2,
    cargo: "Engenheiro de Software",
    empresa: "APH ERP Software de Gestão",
    tipo: "Estágio",
    periodo: "jul. de 2024 - mar. de 2026",
    duracao: "1 ano 9 meses",
    local: "Pelotas, RS",
    modalidade: "Remoto",
    atual: false,
    descricao:
      "Atuação no desenvolvimento de software e evolução contínua de sistema ERP com Java e PostgreSQL, garantindo alta confiabilidade em regras de negócio e fluxos críticos.",
    atividades: [
      "Desenvolvimento e sustentação de funcionalidades backend em Java utilizando o framework JFRM",
      "Modelagem, manipulação e otimização de consultas em banco de dados PostgreSQL",
      "Geração automatizada de relatórios gerenciais em PDF e planilhas XLS",
      "Criação de rotinas e layouts de impressão para emissão de boletos bancários",
      "Implementação de tratamento de exceções, refatoração e melhorias contínuas de código",
    ],
    techs: ["Java", "PostgreSQL", "JFRM", "ERP", "PDF/XLS Generation", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-16 sm:py-24 bg-white dark:bg-[#090a0f] border-t border-slate-200 dark:border-white/[0.06] scroll-mt-16 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f5af0]/10 border border-[#7f5af0]/20 text-[#7f5af0] text-xs font-semibold uppercase tracking-wider">
            <Briefcase size={13} />
            <span>Trajetória Profissional</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experiência & Atuação
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            Vivência prática com engenharia de software no ecossistema <span className="text-slate-900 dark:text-white font-medium">Java / PostgreSQL</span> e operação de <span className="text-slate-900 dark:text-white font-medium">infraestrutura de TI</span>.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-6 lg:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#7f5af0] before:via-slate-300 dark:before:via-white/10 before:to-transparent">
          {experiencias.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-start ${
                  isEven ? "lg:flex-row-reverse" : ""
                } gap-6 lg:gap-10`}
              >
                {/* Timeline node dot */}
                <div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-white dark:bg-[#0c0d14] border-2 border-[#7f5af0] flex items-center justify-center shadow-lg shadow-[#7f5af0]/30 z-10">
                  {exp.atual ? (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-[#7f5af0]" />
                  )}
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-2.5rem)] sm:w-[calc(100%-3.5rem)] lg:w-[calc(50%-2.5rem)] ml-10 sm:ml-14 lg:ml-0">
                  <div className="p-4 sm:p-7 rounded-2xl bg-white dark:bg-[#12131e] border border-slate-200/80 dark:border-white/[0.07] hover:border-[#7f5af0]/50 dark:hover:border-[#7f5af0]/40 transition-all duration-300 shadow-md dark:shadow-xl space-y-4">
                    {/* Top Badges & Title */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono font-semibold text-[#7f5af0]">
                          {exp.empresa}
                        </span>

                        {exp.atual ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Cargo Atual
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.05]">
                            {exp.duracao}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {exp.cargo}
                      </h3>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-[#7f5af0]" />
                          {exp.periodo}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} className="text-[#7f5af0]" />
                          {exp.local} ({exp.modalidade})
                        </span>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                      {exp.descricao}
                    </p>

                    {/* Key Activities */}
                    <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-white/[0.05]">
                      <p className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                        Principais Atividades:
                      </p>
                      <ul className="space-y-1.5">
                        {exp.atividades.map((ativ, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                            <ChevronRight size={13} className="text-[#7f5af0] shrink-0 mt-0.5" />
                            <span>{ativ}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techs.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-[#181a28] text-slate-700 dark:text-gray-300 border border-slate-200/80 dark:border-white/[0.04]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
