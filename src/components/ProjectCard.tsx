import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface ProjectCardData {
  id?: number;
  titulo: string;
  descricao: string;
  imgUrl: string;
  gitUrl: string;
  previewUrl: string | null;
  techs: string[];
  badge?: string;
  featured?: boolean;
}

const techIcons: Record<string, string> = {
  java: "/tecnologies/java.svg",
  spring: "/tecnologies/spring.svg",
  postgres: "/tecnologies/postgresql.svg",
  redis: "/tecnologies/redis.svg",
  rabbitmq: "/tecnologies/rabbitmq.svg",
  next: "/tecnologies/next.svg",
  react: "/tecnologies/react.svg",
  typescript: "/tecnologies/typescript.svg",
  javascript: "/tecnologies/javascript.svg",
  python: "/tecnologies/python.svg",
  docker: "/tecnologies/docker.svg",
  tailwind: "/tecnologies/tailwind.svg",
  swagger: "/tecnologies/swagger.svg",
  nodejs: "/tecnologies/nodejs.svg",
  vitejs: "/tecnologies/vitejs.svg",
  fastfy: "/tecnologies/fastify.svg",
  junit: "/tecnologies/junit.svg",
  grafana: "/tecnologies/grafana.svg",
  prometheus: "/tecnologies/prometheus.svg",
};

export default function ProjectCard({ data }: { data: ProjectCardData }) {
  const { imgUrl, titulo, descricao, gitUrl, previewUrl, techs, badge, featured } = data;

  const hasValidGit = gitUrl && !gitUrl.includes("seu-repositorio-aqui");

  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-[#12131e] border border-slate-200/90 dark:border-white/[0.07] hover:border-[#7f5af0]/50 dark:hover:border-[#7f5af0]/50 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-[#7f5af0]/15 transition-all duration-300">
      {/* Project Image Header */}
      <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-[#1a1b29]">
        <img
          src={imgUrl}
          alt={titulo}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-[#12131e] dark:via-[#12131e]/20 dark:to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          {badge ? (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-white/90 dark:bg-[#0c0d14]/85 text-[#7f5af0] border border-[#7f5af0]/30 shadow-sm backdrop-blur-md">
              {badge}
            </span>
          ) : <span />}

          {featured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 backdrop-blur-md">
              Destaque
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#7f5af0] transition-colors leading-snug">
            {titulo}
          </h3>

          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {descricao}
          </p>

          {/* Tech Badges */}
          {techs && techs.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1.5">
              {techs.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-md bg-slate-100 dark:bg-[#181a28] border border-slate-200/80 dark:border-white/[0.04] text-[10px] sm:text-[11px] text-slate-700 dark:text-gray-300"
                  title={tech}
                >
                  {techIcons[tech] ? (
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="w-3 sm:w-3.5 h-3 sm:h-3.5 object-contain"
                    />
                  ) : null}
                  <span className="capitalize">{tech === "fastfy" ? "Fastify" : tech}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Links */}
        <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center gap-2">
          {hasValidGit && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[38px] sm:min-h-[40px] inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#7f5af0] text-slate-700 hover:text-white border border-slate-200 dark:bg-white/[0.05] dark:border-transparent dark:hover:bg-[#7f5af0] dark:hover:text-white dark:text-gray-300 text-xs font-semibold transition-all duration-200 active:scale-95"
            >
              <FaGithub size={15} />
              <span>Código</span>
            </a>
          )}

          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[38px] sm:min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#7f5af0] hover:bg-[#6e46ec] text-white text-xs font-semibold shadow-md shadow-[#7f5af0]/20 transition-all duration-200 active:scale-95"
            >
              <span>Demo</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

