import { About } from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProjetcSection from "./components/ProjectsSection";
import { Tecnologies } from "./components/techStack";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0c0d14] text-slate-800 dark:text-gray-100 flex flex-col selection:bg-[#7f5af0] selection:text-white transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <About />
        <Experience />
        <Education />
        <Tecnologies />
        <ProjetcSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

