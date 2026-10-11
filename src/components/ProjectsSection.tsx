"use client";

import { useState } from "react";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";

interface ProjetoItem extends ProjectCardData {
  id: number;
  categoria: string[];
}

const dadosProjetos: ProjetoItem[] = [
  {
    id: 1,
    titulo: "Vitrin ERP",
    descricao: "Sistema de gestão de estoque e vendas para PMEs. Controle de produtos, baixa automática de estoque, ordens a fornecedores e emissão de relatórios.",
    imgUrl: "/projects/vitrin.jpg",
    categoria: ["Todos", "Web"],
    gitUrl: "",
    previewUrl: "https://vitrin-six.vercel.app/",
    techs: ["next", "react", "typescript", "fastfy", "tailwind", "postgres"],
    badge: "TCC / Gestão",
    featured: true,
  },
  {
    id: 2,
    titulo: "RabbitMQ Email Sender",
    descricao: "Sistema de mensageria assíncrona baseado no padrão Producer/Consumer. Desacopla o envio de notificações e e-mails com reprocessamento e resiliência.",
    imgUrl: "/projects/rabbitmq.jpg",
    categoria: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/RabbitMQ_Email_Sender",
    previewUrl: null,
    techs: ["java", "spring", "rabbitmq", "swagger", "docker", "junit"],
    badge: "Mensageria Assíncrona",
    featured: true,
  },
  {
    id: 3,
    titulo: "Transaction Stats API (Itaú)",
    descricao: "API financeira de alta precisão para cálculo de estatísticas em tempo real com janela deslizante de 60 segundos, telemetria Prometheus e dashboards Grafana.",
    imgUrl: "/projects/transacao.jpg",
    categoria: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Desafio_Spring_Itau",
    previewUrl: null,
    techs: ["java", "spring", "swagger", "docker", "junit", "grafana", "prometheus"],
    badge: "Desafio Itaú",
    featured: true,
  },
  {
    id: 4,
    titulo: "Redis Gaming API",
    descricao: "API de alta performance focada em cache inteligente, ranking em tempo real com Sorted Sets e controle de taxa (rate limiting) para aplicações de jogos.",
    imgUrl: "/projects/redis.jpg",
    categoria: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Redis_Cache_gaming",
    previewUrl: null,
    techs: ["java", "spring", "postgres", "redis", "swagger", "docker", "junit"],
    badge: "Cache & Performance",
  },
  {
    id: 5,
    titulo: "Verbalize",
    descricao: "Plataforma de intercâmbio linguístico que conecta estudantes e entusiastas para prática de conversação com backend seguro e interface moderna.",
    imgUrl: "/projects/Verbalize.png",
    categoria: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Next_Verbalise_Frontend",
    previewUrl: "https://verbalize-senac.vercel.app/",
    techs: ["next", "typescript", "tailwind", "nodejs", "postgres"],
    badge: "Plataforma Web",
  },
  {
    id: 6,
    titulo: "MagicFridge AI",
    descricao: "Microsserviço de culinária inteligente que sugere receitas otimizadas com base nos ingredientes do usuário, integrando Java, Spring e Google Gemini.",
    imgUrl: "/projects/receitas.jpg",
    categoria: ["Todos", "Backend", "IA"],
    gitUrl: "https://github.com/PedroHSiqueira/MagicFridgeAI_BJ",
    previewUrl: null,
    techs: ["java", "spring", "docker"],
    badge: "IA Generativa",
  },
  {
    id: 7,
    titulo: "Finance Control API",
    descricao: "API RESTful para controle financeiro pessoal com autenticação JWT, gestão de categorias de despesas e modelagem relacional em PostgreSQL.",
    imgUrl: "/projects/finance.jpg",
    categoria: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/FinanceControl_SB",
    previewUrl: null,
    techs: ["java", "spring", "postgres"],
    badge: "Finanças & JWT",
  },
  {
    id:8,
    titulo: "Posts Generator AI",
    descricao: "API em Spring Boot integrada ao Google Gemini para automação e geração ágil de posts e resumos técnicos para mídias sociais e blogs.",
    imgUrl: "/projects/postAi.jpg",
    categoria: ["Todos", "Backend", "IA"],
    gitUrl: "https://github.com/PedroHSiqueira/PostGenerator_AI_SB",
    previewUrl: null,
    techs: ["java", "spring"],
    badge: "Gemini AI",
  },
  {
    id: 9,
    titulo: "Chatbot Ollama LLM",
    descricao: "Agente conversacional local em Python utilizando o modelo Llama 3 via Ollama, executando inferência offline sem dependência de APIs externas.",
    imgUrl: "/projects/chatbot.png",
    categoria: ["Todos", "Backend", "IA"],
    gitUrl: "https://github.com/PedroHSiqueira/Ollama_Chatbot",
    previewUrl: null,
    techs: ["python"],
    badge: "LLM Local",
  },
  {
    id: 10,
    titulo: "Finance Dashboard",
    descricao: "Dashboard interativo em Next.js para visualização e análise de taxas de câmbio em tempo real, consumindo dados ao vivo da AwesomeAPI.",
    imgUrl: "/projects/finance.png",
    categoria: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Dashboard_Cambio_monetario",
    previewUrl: "https://dashboard-finance-one.vercel.app/",
    techs: ["next", "typescript", "tailwind"],
    badge: "Tempo Real",
  },
  {
    id: 11,
    titulo: "Reino de Yemanjá Bocci",
    descricao: "Website institucional responsivo com foco em apresentação de serviços, agendamentos online e identidade visual moderna em React e Tailwind.",
    imgUrl: "/projects/iemanja.jpg",
    categoria: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Vite_Site_Iemanja",
    previewUrl: "https://vite-iemanja-build.vercel.app/",
    techs: ["vitejs", "react", "typescript", "tailwind"],
    badge: "Site Comercial",
  },
];

export default function ProjetcSection() {
  const [tag, setTag] = useState("Todos");

  const tags = [
    { nome: "Todos", count: dadosProjetos.length },
    { nome: "Backend", count: dadosProjetos.filter((p) => p.categoria.includes("Backend")).length },
    { nome: "Web", count: dadosProjetos.filter((p) => p.categoria.includes("Web")).length },
    { nome: "IA", count: dadosProjetos.filter((p) => p.categoria.includes("IA")).length },
  ];

  const projetosFiltrados = dadosProjetos.filter((projeto) => projeto.categoria.includes(tag));

  return (
    <section id="projetos" className="relative py-16 sm:py-24 bg-slate-50 dark:bg-[#0a0b10] border-t border-slate-200 dark:border-white/[0.06] transition-colors scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7f5af0]/10 border border-[#7f5af0]/20 text-[#7f5af0] text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 size={13} />
            <span>Portfólio de Código</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projetos Selecionados
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            Aplicações focadas em arquitetura sólida, mensageria assíncrona, microsserviços e sistemas web completos.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center px-1 no-scrollbar">
          {tags.map((t) => (
            <div key={t.nome} className="shrink-0 sm:shrink">
              <ProjectTag
                nome={t.nome}
                count={t.count}
                selecionado={tag === t.nome}
                onClick={(novoNome) => setTag(novoNome)}
              />
            </div>
          ))}
        </div>

        {/* Grid with animations */}
        <motion.div layout className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {projetosFiltrados.map((projeto) => (
              <motion.div
                layout
                key={projeto.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <ProjectCard data={projeto} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

