import { PanelsTopLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  imgUrl: string;
  titulo: string;
  descricao: string;
  gitUrl: string;
  previewUrl: string | null;
  techs: string[];
}

// Mapa de ícones
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
};

export default function ProjectCard({ data }: { data: ProjectCardProps }) {
  const { imgUrl, titulo, descricao, gitUrl, previewUrl, techs } = data;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-[#111116] border border-white/5 shadow-lg hover:shadow-2xl transition-all duration-300">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={imgUrl}
          alt={titulo}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent opacity-80" />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col justify-between min-h-[260px]">
        <div>
          <h5 className="text-xl font-semibold text-white mb-2">
            {titulo}
          </h5>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
            {descricao}
          </p>

          {/* TECH TAGS */}
          {techs && (
            <div className="flex flex-wrap gap-2 mt-4">
              {techs.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center justify-center bg-[#1a1a22] p-1.5 rounded-md"
                  title={tech}
                >
                  <img
                    src={techIcons[tech]}
                    alt={tech}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">
          {gitUrl ? (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#1a1a22] hover:bg-[#7f5af0] text-white transition-all duration-300 text-sm font-medium"
            >
              <FaGithub size={18} />
              Código
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-700 text-gray-300 text-sm opacity-60 cursor-not-allowed">
              <FaGithub size={18} />
              Privado
            </span>
          )}

          {previewUrl ? (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-[#7f5af0] hover:bg-[#6b4ae0] text-white transition-all duration-300 text-sm font-medium"
            >
              <PanelsTopLeft size={18} />
              Deploy
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-700 text-gray-300 text-sm opacity-60 cursor-not-allowed">
              <PanelsTopLeft size={18} />
              Sem deploy
            </span>
          )}
        </div>
      </div>
    </div>
  );
}