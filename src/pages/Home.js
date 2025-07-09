import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import './css/home.css';
import Experience from "./Experience";
import Footer from "./Footer";
import NameSection from "./NameSection";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <NameSection />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;