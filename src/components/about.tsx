import { TypeAnimation } from "react-type-animation";
import { useLottie } from "lottie-react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Server, Cpu, Activity, CheckCircle2, Mail } from "lucide-react";
import AnimationData from "../assets/animation/phoneAnimation.json";

export function About() {
  const { View } = useLottie({
    animationData: AnimationData,
    loop: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-[#7f5af0]" />,
      title: "APIs & Microsserviços",
      description: "Desenvolvimento de APIs RESTful resilientes com Java e Spring Boot, seguindo padrões de Clean Architecture e SOLID.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Performance & Mensageria",
      description: "Estratégias de cache com Redis, mensageria assíncrona com RabbitMQ e bancos de dados relacionais otimizados.",
    },
    {
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      title: "DevOps & Observabilidade",
      description: "Conteinerização com Docker, testes unitários com JUnit, documentação Swagger e métricas com Prometheus e Grafana.",
    },
  ];

  return (
    <div id="about" className="relative pt-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#7f5af0]/15 to-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#7f5af0]/10 border border-[#7f5af0]/20 text-[#7f5af0] dark:text-[#a78bfa] text-xs font-semibold tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7f5af0]"></span>
            </span>
            Atuando na Osirnet
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-lg font-medium">Olá, eu sou Pedro Henrique 👋</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
              <span className="block text-slate-900 dark:text-white">Desenvolvedor</span>
              <span className="block mt-1 sm:mt-2 min-h-[1.25em] bg-gradient-to-r from-[#7f5af0] via-purple-400 to-indigo-300 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    "Back-end",
                    2200,
                    "Java & Spring",
                    2200,
                    "APIs REST",
                    2200,
                  ]}
                  speed={45}
                  repeat={Infinity}
                  wrapper="span"
                  className="inline-block"
                />
              </span>
            </h1>
          </div>

          {/* Concise bio */}
          <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Focado na construção de sistemas escaláveis, arquiteturas orientadas a eventos e APIs de alta performance com <strong className="text-slate-900 dark:text-gray-200 font-semibold">Java, Spring Boot e Docker</strong>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#7f5af0] hover:bg-[#6e46ec] text-white font-semibold text-sm shadow-lg shadow-[#7f5af0]/25 hover:shadow-[#7f5af0]/40 transition-all duration-200 active:scale-95"
            >
              <span>Ver Projetos</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-200/70 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.1] border border-slate-300/80 dark:border-white/10 text-slate-800 dark:text-gray-200 text-sm font-semibold transition-all duration-200"
            >
              <Mail size={16} />
              <span>Fale Comigo</span>
            </a>

            <a
              href="./pdf/Curriculo.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-dashed border-slate-300 hover:border-[#7f5af0] text-slate-600 hover:text-[#7f5af0] dark:border-gray-700 dark:hover:border-[#7f5af0] dark:text-gray-400 dark:hover:text-[#7f5af0] text-sm font-medium transition-all duration-200"
            >
              <Download size={15} />
              <span>Baixar CV</span>
            </a>
          </div>

          {/* Highlights Mini-Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-slate-200 dark:border-white/[0.08] max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
            <div>
              <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">10+</p>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400">Projetos Construídos</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold text-[#7f5af0] font-mono">ADS</p>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400">Graduado em T.I.</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-bold text-emerald-500 dark:text-emerald-400 font-mono">Java/Spring</p>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400">Especialidade Core</p>
            </div>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Ambient backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7f5af0]/20 to-indigo-500/10 rounded-3xl blur-2xl -z-10" />

            <div className="p-4 sm:p-6 rounded-3xl bg-white/90 dark:bg-[#12131e]/90 border border-slate-200/80 dark:border-white/[0.08] shadow-xl dark:shadow-2xl backdrop-blur-md">
              {/* Terminal-like header */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-slate-200 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-slate-500 dark:text-gray-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  pedro-service:up
                </span>
              </div>

              {/* Lottie Animation Display */}
              <div className="w-full max-w-[220px] sm:max-w-[280px] mx-auto py-2">
                {View}
              </div>

              {/* Tech Highlights Footer */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-around text-[10px] sm:text-xs text-slate-500 dark:text-gray-400 font-mono gap-1 sm:gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-[#7f5af0]" /> Java 21
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-[#7f5af0]" /> Spring Boot 3
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={13} className="text-[#7f5af0]" /> Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sobre Mim / Pillars Section */}
      <section className="relative py-16 sm:py-20 bg-slate-100/70 dark:bg-[#0e0f17] border-y border-slate-200 dark:border-white/[0.06] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Developer photo card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#7f5af0] to-indigo-500 opacity-30 group-hover:opacity-60 blur transition duration-500" />
                <img
                  src="./dev.jpg"
                  alt="Pedro Henrique"
                  className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Pedro Henrique</h3>
                <p className="text-xs text-[#7f5af0] font-mono">Desenvolvedor Back-end</p>
              </div>
            </div>

            {/* Profile Description & Pillars */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#7f5af0] uppercase">Sobre Mim</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                  Engenharia de software com foco em qualidade e escalabilidade
                </h2>
              </div>

              <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                Graduado em <strong>Análise e Desenvolvimento de Sistemas</strong>, atuo no desenvolvimento de soluções backend com foco em alta disponibilidade e código limpo. Experiência na construção de APIs REST, integração de bancos relacionais e não-relacionais, e aplicação de boas práticas arquiteturais.
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 text-left">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#141522] border border-slate-200/80 dark:border-white/[0.06] hover:border-[#7f5af0]/50 dark:hover:border-[#7f5af0]/40 transition duration-300 space-y-2.5 shadow-sm dark:shadow-none"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/[0.04] w-fit">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{pillar.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

