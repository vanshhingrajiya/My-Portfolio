import HeroSection from '../sections/HeroSection'
import Navbar from '../sections/Navbar'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectSection from '../sections/ProjectSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'
import Snowfall from "react-snowfall";
import "../style/App.css"

const App = () => {
  return (
    <>
      <div className="app-root">
        <Snowfall
          snowflakeCount={500}
          color="white"
          radius={[0.5, 2.5]}
          speed={[0.5, 2]}
          wind={[-0.5, 2]}
        />
      </div>

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