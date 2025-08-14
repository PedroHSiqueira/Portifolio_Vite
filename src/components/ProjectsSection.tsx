"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const dadosProjetos = [
  
  {
    id: 1,
    titulo: "MagicFridge AI",
    descricao: "uma Geladeira para guardar alimentos e gerar um receita a partir dos itens guardados, usando Inteligência artificial [ ChatGPT e Gemini ], usando Java e seu Framework Spring Boot",
    imagem: "/projects/receitas.jpg",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/MagicFridgeAI_BJ",
    previewUrl: "https://github.com/PedroHSiqueira/MagicFridgeAI_BJ",
  },
  {
    id: 2,
    titulo: "Chatbot Ollama 🤖",
    descricao: "Este projeto é um chatbot de IA que pode responder a perguntas simples, foi construido com Python e a LLM (Large Language Model) Llama3, que é uma versão mais leve e eficiente do GPT-3, onde você pode conversar com o chatbot e obter respostas para suas perguntas.",
    imagem: "/projects/chatbot.png",
    tag: ["Todos", "Backend"],
    gitUrl: "https://github.com/PedroHSiqueira/Ollama_Chatbot",
    previewUrl: "https://github.com/PedroHSiqueira/Ollama_Chatbot",
  },
  {
    id: 3,
    titulo: "Finance Dashboard 💰",
    descricao: "Este projeto é um painel financeiro que exibe a cotação do real (BRL) em relação a diversas moedas estrangeiras. O painel é construído com Next.js e consome a API de câmbio da awesome-API para fornecer dados de câmbio em tempo real.",
    imagem: "/projects/finance.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Dashboard_Cambio_monetario",
    previewUrl: "https://dashboard-finance-one.vercel.app/",
  },
  {
    id: 4,
    titulo: "Reino de Yemanjá Bocci 🏖️",
    descricao: "Este projeto se trata de um freelance de um site para uma casa religiosa, onde você pode encontrar informações sobre a casa, serviços oferecidos, marcar consultas e muito mais. O site foi desenvolvido com React.js e Tailwind CSS, proporcionando uma experiência de usuário fluida e responsiva.",
    imagem: "/projects/iemanja.jpg",
    tag: ["Todos", "Web"],
    gitUrl: null,
    previewUrl: "https://www.yalorixagenifferdeiemanja.com/",
  },
  {
    id: 5,
    titulo: "Verbalize 💬",
    descricao: "Este projeto trata-se de um site para intercambio linguístico, onde você pode encontrar pessoas que falam a língua que você deseja aprender e que desejam aprender a língua que você fala. O site foi desenvolvido com Next.js e PostgresSQL",
    imagem: "/projects/Verbalize.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/PedroHSiqueira/Next_Verbalise_Frontend",
    previewUrl: "https://verbalize-senac.vercel.app/",
  },
  {
    id: 6,
    titulo: "Aplicativo de Clima 🌧️",
    descricao: "o projeto tem como intuito mantê-lo informado sobre as condições meteorológicas atuais e futuras, onde quer que você esteja. Com uma interface elegante e intuitiva, este aplicativo desenvolvido em Flutter oferece acesso rápido e fácil a dados precisos de clima, alimentados pela robusta API da OpenWeather",
    imagem: "/projects/weather_app.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/PedroHSiqueira/Flutter_Weather_App",
    previewUrl: "https://github.com/PedroHSiqueira/Flutter_Weather_App",
  }
];

export default function ProjetcSection() {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (novaTag: React.SetStateAction<string>) => {
    setTag(novaTag);
  };

  const projetosFiltrados = dadosProjetos.filter((projeto) => projeto.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projetos" className="p-10 pt-3 bg-[#242629] lg:pb-16 lg:px-16">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-[#fffffe] md:mb-12">Meus Projetos</h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag onClick={handleTagChange} nome="Todos" selecionado={tag === "Todos"} />
        <ProjectTag onClick={handleTagChange} nome="Backend" selecionado={tag === "Backend"} />
        <ProjectTag onClick={handleTagChange} nome="Web" selecionado={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} nome="Mobile" selecionado={tag === "Mobile"} />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {projetosFiltrados.map((projeto, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.25, delay: index * 0.25 }} className="flex h-full">
            <div className="flex flex-col flex-1 h-full">
              <ProjectCard
                key={projeto.id}
                data={{
                  titulo: projeto.titulo,
                  descricao: projeto.descricao,
                  imgUrl: projeto.imagem,
                  gitUrl: projeto.gitUrl ?? "",
                  previewUrl: projeto.previewUrl,
                }}
              />
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
