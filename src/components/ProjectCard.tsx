import { PanelsTopLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  imgUrl: string;
  titulo: string;
  descricao: string;
  gitUrl: string;
  previewUrl: string;
}
export default function ProjectCard({ data }: { data: ProjectCardProps }) {
  const { imgUrl, titulo, descricao, gitUrl, previewUrl } = data;
  return (
    <div>
      <div className="relative shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-3xl">
        <img src={imgUrl} alt={titulo} className="rounded-t-xl" />
        <div className="mt-3 bg-[#181818] text-white py-6 px-4 rounded-b-xl lg:min-h-[272px]">
          <h5 className="mb-2 text-xl font-semibold">{titulo}</h5>
          <p className="mb-5 text-[#ADB7BE] lg:min-h-[144px]">{descricao}</p>
          <div className="flex justify-around items-center">
            {gitUrl ? (
              <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="py-2 px-5 border-2 border-[#232946] rounded-md bg-gradient-to-r from-[#232946] to-[#3b3b3b] text-white font-semibold shadow-md transition-all duration-200 hover:scale-105 hover:from-[#3b3b3b] hover:to-[#232946] focus:outline-none focus:ring-2 focus:ring-[#232946] mx-2">
                <span className="inline-flex items-center gap-2">
                  <FaGithub size={20} />
                  Github
                </span>
              </a>
            ) : (
              <span className="py-2 px-5 border-2 border-[#232946] rounded-md bg-gray-500 text-white font-semibold shadow-md mx-2 opacity-60 cursor-not-allowed inline-flex items-center gap-2">
                <FaGithub size={20} />
                Código privado
              </span>
            )}
            <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="py-2 px-5 border-2 border-[#232946] rounded-md bg-gradient-to-r from-[#232946] to-[#5f6c7b] text-white font-semibold shadow-md transition-all duration-200 hover:scale-105 hover:from-[#5f6c7b] hover:to-[#232946] focus:outline-none focus:ring-2 focus:ring-[#232946] mx-2">
              <span className="inline-flex items-center gap-2">
                <PanelsTopLeft size={20} />
                Deploy
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
