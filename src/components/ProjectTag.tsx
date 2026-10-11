import React from "react";

interface ProjectTagProps {
  nome: string;
  onClick: (nome: string) => void;
  selecionado: boolean;
  count?: number;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ nome, onClick, selecionado, count }) => {
  return (
    <button
      onClick={() => onClick(nome)}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
        selecionado
          ? "bg-[#7f5af0] text-white shadow-lg shadow-[#7f5af0]/25"
          : "bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/90 shadow-sm dark:bg-[#141522] dark:hover:bg-[#1a1c2d] dark:text-gray-400 dark:hover:text-white dark:border-white/[0.06] dark:shadow-none"
      }`}
    >
      <span>{nome}</span>
      {count !== undefined && (
        <span
          className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
            selecionado ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600 dark:bg-white/[0.06] dark:text-gray-400"
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default ProjectTag;

