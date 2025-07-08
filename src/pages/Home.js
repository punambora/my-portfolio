import Navbar from "../components/Navbar";
import './css/home.css';
import NameSection from "./NameSection";

function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <NameSection />
    </div>
  );
}

export default Home;