import { TypeAnimation } from "react-type-animation";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import AnimationData from "../assets/animation/phoneAnimation.json";

export function About() {
  const { View } = useLottie({ animationData: AnimationData, loop: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0f0f13] text-white pt-20">
      <motion.section variants={cardVariants} initial="hidden" animate="visible" transition={{ duration: 0.5 }} className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5 text-center md:text-left">
          <h3 className="text-lg text-gray-400">Olá 👋</h3>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Sou{" "}
            <span className="text-[#7f5af0]">
              <TypeAnimation sequence={["Pedro", 1500, "Dev Back-end", 1500]} speed={50} repeat={Infinity} />
            </span>
          </h1>

          <p className="text-gray-400 max-w-md mx-auto md:mx-0">Foco na construção de aplicações modernas e APIs robustas com Java e Spring Boot.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#7f5af0] hover:bg-[#6b4ae0] transition px-6 py-3 rounded-xl font-medium shadow-lg">Contato</button>

            <a download href="./pdf/Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="border border-gray-600 hover:border-[#7f5af0] hover:text-[#7f5af0] transition px-6 py-3 rounded-xl text-center">
              Baixar Currículo
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[250px] sm:w-[300px] md:w-[350px]">{View}</div>
        </div>
      </motion.section>

      <section className="bg-[#18181d] py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">
          <img src="./dev.png" alt="Developer" className="hidden lg:block rounded-2xl shadow-lg" />

          <div className="lg:col-span-2 bg-[#111116] p-8 rounded-2xl shadow-lg space-y-5">
            <h2 className="text-2xl font-bold text-[#7f5af0]">Sobre mim</h2>

            <p className="text-gray-400 leading-relaxed">Olá! Me chamo Pedro Henrique e sou Desenvolvedor Back-end com foco na construção de APIs eficientes e escaláveis utilizando Java e Spring Boot.</p>

            <p className="text-gray-400 leading-relaxed">Sou formado em Análise e Desenvolvimento de Sistemas, com experiência em Java, Spring Boot, SQL e Node.js. Também utilizo ferramentas como Git e Docker no desenvolvimento de soluções modernas.</p>

            <p className="text-gray-400 leading-relaxed">Busco escrever código limpo, aplicar boas práticas e evoluir constantemente na área de engenharia de software, com foco em backend e arquitetura de sistemas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
