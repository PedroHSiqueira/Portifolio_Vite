import React from "react";

interface ProjectTagProps {
  nome: string;
  onClick: (nome: string) => void;
  selecionado: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ nome, onClick, selecionado }) => {
  const estilosBotao = selecionado ? "border-[#7f5af0] text-[#fffffe]" : "border-slate-600 text-[#fffffe] hover:border-blue-500";
  return (
    <button className={`${estilosBotao} cursor-pointer rounded-full border-[3px] px-3 py-1 text-lg md:px-5 md:py-2`} onClick={() => onClick(nome)}>
      {nome}
    </button>
  );
};

export default ProjectTag;
