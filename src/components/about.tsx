import { TypeAnimation } from "react-type-animation";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import AnimationData from "../assets/animation/phoneAnimation.json";

export function About() {
  const opcoes = {
    animationData: AnimationData,
    loop: true,
  };

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const { View } = useLottie(opcoes);
  return (
    <>
      <div className="bg-[#16161a] pt-20">
        <motion.section
          variants={cardVariants}
          initial="initial"
          animate={"animate"}
          transition={{ duration: 0.3, delay: 0.25 }}
          viewport={{
            margin: "-200px",
            once: false,
          }}
          className="relative h-full w-full py-24 lg:px-10"
        >
          <div className="flex flex-col md:flex-row justify-around">
            <div className="col-span-8 place-self-center justify-self-start text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#fffffe]">Olá 👋!</h3>
              <h1 className="mb-4 text-2xl font-extrabold text-[#fffffe] sm:text-3xl lg:text-5xl lg:leading-normal">
                <span>Sou </span>
                <TypeAnimation className="text-[#7f5af0]" sequence={["Pedro Siqueira", 1000, "Dev Back-end", 1000]} wrapper="span" speed={50} repeat={Infinity} />
              </h1>
              <p className="mb-6 text-xs text-[#94a1b2] sm:text-lg">Mas possuo experiência com desenvolvimento Full-stack e Mobile</p>
              <div className="flex gap-5 justify-center md:justify-normal">
                <button
                  className="z-40 cursor-pointer bg-[#5D3FD3] p-3 font-semibold rounded text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
                  onClick={() => {
                    alert("Em breve");
                  }}
                >
                  Contato
                </button>
                <a download={true} href="./pdf/Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center cursor-pointer bg-gray-200 p-1 text-sm text-center font-semibold text-black border-[#fffffe] rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#5D3FD3] hover:text-[#fffffe]">
                  Baixar Curriculo
                </a>
              </div>
            </div>
            <div className="col-span-4 mt-4 flex items-center justify-center place-self-center lg:mt-0">
              <div className="w-4/6">{View}</div>
            </div>
          </div>
        </motion.section>
      </div>
      <section className="py-5 bg-[#242629]">
        <section className="flex gap-20 m-12 lg:mx-16" id="about">
          <img className="hidden w-1/5 rounded-3xl border-2 border-black xl:block" src={"./dev.jpeg"} alt={"Macbook"} />
          <div className="p-8 bg-[#16161a] rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
            <h2 className="mb-5 text-2xl font-bold text-center text-[#fffffe]">Sobre mim</h2>
            <p className="text-[#94a1b2]">Olá 👋! Me chamo Pedro Henrique e sou um Desenvolvedor Back-end, mas que passou por experiências com desenvolvimento Full-stack.</p>
            <br />
            <p className="text-[#94a1b2]">Em 2023 iniciei com estudante de Análise e Desenvolvimento de Sistemas, Foi na graduação onde aprendi como funciona o mundo da tecnologia, incluindo bancos de dados relacionais como PostgreSQL, e Programação Orientada a Objeto, conhecimentos fundamentais que me ajudaram a chegar onde estou hoje. Paralelamente, estou me aprofundando no framework Spring Boot para Java, o que tem expandido significativamente meu conjunto de habilidades para desenvolvimento de aplicações web robustas e escaláveis.</p>
            <br />
          </div>
        </section>
      </section>
    </>
  );
}
