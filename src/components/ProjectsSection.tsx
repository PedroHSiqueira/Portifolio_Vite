"use client";
import { useState, useRef, type SetStateAction } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dadosProjetos = [
  {
    id: 9,
    titulo: "Redis Gaming API ⚡",
    descricao: "API backend com foco em performance utilizando Redis para cache, ranking em tempo real e rate limiting, desenvolvida com Java, Spring Boot e PostgreSQL.",
    imagem: "/projects/redis.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Redis_Cache_gaming",
    previewUrl: null,
    techs: ["java", "spring", "postgres", "redis", "swagger", "docker", "junit"],
  },
  {
    id: 10,
    titulo: "RabbitMQ Email Sender 📩",
    descricao: "Sistema baseado em mensageria utilizando RabbitMQ para envio assíncrono de e-mails, com arquitetura Producer/Consumer e serviços desacoplados em Java + Spring Boot.",
    imagem: "/projects/rabbitmq.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/RabbitMQ_Email_Sender",
    previewUrl: null,
    techs: ["java", "spring", "rabbitmq", "swagger", "docker", "junit"],
  },
  {
    id: 11,
    titulo: "Transaction Stats API 📊",
    descricao: "API REST em Java + Spring Boot para gerenciamento de transações financeiras e cálculo de estatísticas em tempo real com base em uma janela deslizante de 60 segundos. Projeto feito para desafio Técnico para o banco Itaú.",
    imagem: "/projects/transacao.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Desafio_Spring_Itau",
    previewUrl: null,
    techs: ["java", "spring", "swagger", "docker", "junit", "grafana", "prometheus"],
  },
  {
    id: 12,
    titulo: "Vitrin ERP 📦",
    descricao: "Sistema web para gestão de estoque voltado para pequenas empresas, permitindo controle de produtos, registro de vendas, baixa automática no estoque, pedidos a fornecedores e geração de relatórios. Projeto desenvolvido como TCC com foco em organização, performance e escalabilidade.",
    imagem: "/projects/vitrin.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/seu-repositorio-aqui",
    previewUrl: "https://vitrin-six.vercel.app/",
    techs: ["next", "react", "typescript", "fastfy", "tailwind", "postgres"],
  },
  {
    id: 7,
    titulo: "Verbalize 💬",
    descricao: "Plataforma web para intercâmbio linguístico que conecta pessoas interessadas em aprender novos idiomas, desenvolvida com Next.js e PostgreSQL.",
    imagem: "/projects/Verbalize.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Next_Verbalise_Frontend",
    previewUrl: "https://verbalize-senac.vercel.app/",
    techs: ["next", "typescript", "tailwind", "nodejs", "postgres"],
  },
  {
    id: 6,
    titulo: "Reino de Yemanjá Bocci 🏖️",
    descricao: "Site institucional desenvolvido em React e Tailwind CSS para uma casa religiosa, com foco em responsividade, apresentação de serviços e agendamento de consultas.",
    imagem: "/projects/iemanja.jpg",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Vite_Site_Iemanja",
    previewUrl: "https://www.yalorixagenifferdeiemanja.com/",
    techs: ["vitejs", "react", "typescript", "tailwind"],
  },
  {
    id: 5,
    titulo: "Finance Dashboard 💰",
    descricao: "Dashboard web desenvolvido com Next.js que exibe cotações de moedas em tempo real, consumindo a API da AwesomeAPI para dados atualizados.",
    imagem: "/projects/finance.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Dashboard_Cambio_monetario",
    previewUrl: "https://dashboard-finance-one.vercel.app/",
    techs: ["next", "typescript", "tailwind"],
  },
  {
    id: 1,
    titulo: "MagicFridge AI",
    descricao: "Aplicação que sugere receitas automaticamente com base nos alimentos disponíveis, utilizando IA (ChatGPT e Gemini) e backend em Java com Spring Boot.",
    imagem: "/projects/receitas.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/MagicFridgeAI_BJ",
    previewUrl: null,
    techs: ["java", "spring", "docker"],
  },
  {
    id: 4,
    titulo: "Finance API 💰",
    descricao: "API REST para gestão financeira com autenticação via JWT, controle de usuários e integração com banco de dados relacional, focada em segurança e escalabilidade.",
    imagem: "/projects/finance.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/FinanceControl_SB",
    previewUrl: null,
    techs: ["java", "spring", "postgres"],
  },
  {
    id: 2,
    titulo: "Posts Generator [Gemini AI]",
    descricao: "API em Java + Spring Boot integrada ao Google Gemini para geração automática de textos e resumos, ideal para criação de conteúdos para redes sociais e blogs.",
    imagem: "/projects/postAi.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/PostGenerator_AI_SB",
    previewUrl: null,
    techs: ["java", "spring"],
  },
  {
    id: 3,
    titulo: "Chatbot Ollama 🤖",
    descricao: "Chatbot desenvolvido em Python utilizando a LLM Llama3 via Ollama, capaz de responder perguntas e simular conversas em linguagem natural.",
    imagem: "/projects/chatbot.png",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Ollama_Chatbot",
    previewUrl: null,
    techs: ["python"],
  },
];

export default function ProjetcSection() {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (novaTag: SetStateAction<string>) => {
    setTag(novaTag);
  };

  const projetosFiltrados = dadosProjetos.filter((projeto) => projeto.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projetos" className="bg-[#242629] pt-12 pb-16 px-4 sm:px-6 lg:px-16 scroll-mt-24">
      <h2 className="mt-4 mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#fffffe] md:mb-12">Meus Projetos </h2>
      <div className="flex flex-wrap items-center justify-center gap-3 py-6 text-white">
        <ProjectTag onClick={handleTagChange} nome="Todos" selecionado={tag === "Todos"} />
        <ProjectTag onClick={handleTagChange} nome="Backend" selecionado={tag === "Backend"} />
        <ProjectTag onClick={handleTagChange} nome="Web" selecionado={tag === "Web"} />
      </div>

      <ul ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projetosFiltrados.map((projeto, index) => (
          <motion.li key={projeto.id} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.1 }} className="h-full">
            <div className="flex flex-col h-full">
              <ProjectCard
                data={{
                  titulo: projeto.titulo,
                  descricao: projeto.descricao,
                  imgUrl: projeto.imagem,
                  gitUrl: projeto.gitUrl ?? "",
                  previewUrl: projeto.previewUrl,
                  techs: projeto.techs,
                }}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
