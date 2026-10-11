"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Terminal, Database, Cloud, Layout } from "lucide-react";

interface TechItem {
  name: string;
  category: "backend" | "data" | "devops" | "frontend";
  icon: string;
  description: string;
}

const technologies: TechItem[] = [
  // Backend
  { name: "Java", category: "backend", icon: "./tecnologies/java.svg", description: "Linguagem Principal & Concorrência" },
  { name: "Spring Boot", category: "backend", icon: "./tecnologies/spring.svg", description: "APIs REST, Security & Data JPA" },
  { name: "Python", category: "backend", icon: "./tecnologies/python.svg", description: "Scripts & Integrações com IA" },
  { name: "Node.js", category: "backend", icon: "./tecnologies/nodejs.svg", description: "APIs assíncronas & microsserviços" },

  // Dados & Mensageria
  { name: "PostgreSQL", category: "data", icon: "./tecnologies/postgresql.svg", description: "Banco de dados relacional principal" },
  { name: "Redis", category: "data", icon: "./tecnologies/redis.svg", description: "Cache de baixa latência e Rate Limiting" },
  { name: "RabbitMQ", category: "data", icon: "./tecnologies/rabbitmq.svg", description: "Mensageria e filas assíncronas" },

  // DevOps & Observabilidade
  { name: "Docker", category: "devops", icon: "./tecnologies/docker.svg", description: "Conteinerização de ambientes" },
  { name: "Prometheus", category: "devops", icon: "./tecnologies/prometheus.svg", description: "Coleta de métricas e monitoramento" },
  { name: "Grafana", category: "devops", icon: "./tecnologies/grafana.svg", description: "Dashboards visuais de telemetria" },
  { name: "Git & GitHub", category: "devops", icon: "./tecnologies/github.svg", description: "Versionamento e CI/CD" },

  // Frontend & Outros
  { name: "TypeScript", category: "frontend", icon: "./tecnologies/typescript.svg", description: "Tipagem estática e segurança de tipos" },
  { name: "React", category: "frontend", icon: "./tecnologies/react.svg", description: "Interfaces reativas e modulares" },
  { name: "Next.js", category: "frontend", icon: "./tecnologies/next.svg", description: "Aplicações SSR e fullstack web" },
  { name: "Tailwind CSS", category: "frontend", icon: "./tecnologies/tailwind.svg", description: "Estilização utilitária e ágil" },
];

export function Tecnologies() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas", icon: <Layers size={14} /> },
    { id: "backend", label: "Backend & APIs", icon: <Terminal size={14} /> },
    { id: "data", label: "Dados & Filas", icon: <Database size={14} /> },
    { id: "devops", label: "DevOps & Métricas", icon: <Cloud size={14} /> },
    { id: "frontend", label: "Frontend", icon: <Layout size={14} /> },
  ];

  const filteredTechs =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section id="tecnologia" className="relative py-16 sm:py-24 bg-white dark:bg-[#0c0d14] border-t border-slate-200 dark:border-white/[0.06] transition-colors scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <span className="text-xs font-semibold tracking-wider text-[#7f5af0] uppercase">
            Habilidades Técnicas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tech Stack & Ferramentas
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            Tecnologias com as quais construo soluções robustas, com forte foco no ecossistema <span className="text-slate-900 dark:text-white font-medium">Java, Spring Boot e Microsserviços</span>.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center px-1 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 sm:shrink inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#7f5af0] text-white shadow-lg shadow-[#7f5af0]/25"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 dark:bg-[#141522] dark:hover:bg-[#1a1c2d] dark:text-gray-400 dark:hover:text-white dark:border-white/[0.05]"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Technologies Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          <AnimatePresence>
            {filteredTechs.map((tech) => (
              <motion.div
                layout
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group relative p-3 sm:p-4 rounded-2xl bg-slate-50 dark:bg-[#12131e] border border-slate-200/80 dark:border-white/[0.06] hover:border-[#7f5af0]/50 dark:hover:border-[#7f5af0]/50 hover:bg-slate-100/80 dark:hover:bg-[#171826] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#7f5af0]/10 flex flex-col items-center text-center justify-between min-h-[125px] sm:min-h-[140px]"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-slate-200/50 dark:bg-white/[0.03] group-hover:bg-slate-200 dark:group-hover:bg-white/[0.07] group-hover:scale-110 transition-all duration-200">
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    src={tech.icon}
                    alt={tech.name}
                    loading="lazy"
                  />
                </div>

                <div className="mt-2 w-full">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-[#7f5af0] transition-colors truncate">
                    {tech.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-gray-400 leading-tight mt-0.5 line-clamp-2">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
