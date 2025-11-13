import HeroSection from '../sections/HeroSection'
import Navbar from '../sections/Navbar'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectSection from '../sections/ProjectSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'
import "../style/App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App;