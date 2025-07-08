import Navbar from "../components/Navbar";
import About from "./About";
import './css/home.css';
import NameSection from "./NameSection";

function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <NameSection />
      <About />
    </div>
  );
}

export default Home;