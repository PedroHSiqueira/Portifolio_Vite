import { About } from "./components/about"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import ProjetcSection from "./components/ProjectsSection"
import { Tecnologies } from "./components/techStack"

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Tecnologies />
      <ProjetcSection />
      <Footer />
    </>
  )
}

export default App
