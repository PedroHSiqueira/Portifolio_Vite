export function Tecnologies() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-[#fffffe] bg-[#242629] pb-10">Tech Stack |</h1>
      <div id="tecnologia" className="grid grid-cols-2 gap-10 p-10 mx-20 bg-[#16161a] rounded-3xl justify-around sm:grid-cols-5   md:grid-cols-10 lg:mx-0 lg:rounded-none">
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/java.svg"} />
          <p className="text-[#fffffe]">Java</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/spring.svg"} />
          <p className="text-[#fffffe]">Spring</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/next.svg"} />
          <p className="text-[#fffffe]">Next.Js</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/typescript.svg"} />
          <p className="text-[#fffffe]">Typescript</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/javascript.svg"} />
          <p className="text-[#fffffe]">Javascript</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/tailwind.svg"} />
          <p className="text-[#fffffe]">TailwindCSS</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/python.svg"} />
          <p className="text-[#fffffe]">Python</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/mysql.svg"} />
          <p className="text-[#fffffe]">MySQL</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/postgresql.svg"} />
          <p className="text-[#fffffe]">PostgreSQL</p>
        </div>
        <div className="flex gap-y-5 flex-col justify-center items-center">
          <img className="w-14" src={"./tecnologies/docker.svg"} />
          <p className="text-[#fffffe]">Docker</p>
        </div>
      </div>
    </div>
  );
}