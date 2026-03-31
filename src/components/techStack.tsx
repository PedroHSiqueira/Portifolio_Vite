export function Tecnologies() {
  return (
    <section id="tecnologia" className="bg-[#18181d] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-white mb-10">
          Tech Stack 🖥️
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {[
            { name: "Java", icon: "./tecnologies/java.svg" },
            { name: "Spring", icon: "./tecnologies/spring.svg" },
            { name: "Junit", icon: "./tecnologies/junit.svg" },
            { name: "Python", icon: "./tecnologies/python.svg" },
            { name: "Next.js", icon: "./tecnologies/next.svg" },
            { name: "Typescript", icon: "./tecnologies/typescript.svg" },
            { name: "Javascript", icon: "./tecnologies/javascript.svg" },
            { name: "TailwindCSS", icon: "./tecnologies/tailwind.svg" },
            { name: "PostgreSQL", icon: "./tecnologies/postgresql.svg" },
            { name: "Redis", icon: "./tecnologies/redis.svg" },
            { name: "Swagger", icon: "./tecnologies/swagger.svg" },
            { name: "Docker", icon: "./tecnologies/docker.svg" },
            { name: "Grafana", icon: "./tecnologies/grafana.svg" },
            { name: "Prometheus", icon: "./tecnologies/prometheus.svg" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#111116] hover:bg-[#1f1f25] transition shadow-md"
            >
              <img className="w-12" src={tech.icon} alt={tech.name} />
              <p className="text-sm text-gray-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}