import Navbar from "../components/Navbar";
import './css/name-section.css';

function NameSection() {
  return (
    <div className="name-container">
      <div className="left">
        <h1>Hi, I'm <span>Punam Bora</span></h1>
        <div className="content">
          <div className="role">
            Senior Software Developer
          </div>
          <div className='about'>
            React | Node.js | AEM Specialist with 4.5+ years of experience in full-stack development, cloud deployments, and building scalable web applications.
          </div>
          <div className='button-section'>
            <button className='btn btn-primary'>View My Work</button>
            <button className='btn btn-secondary'>Contact Me</button>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="ball-big">
          <div className="logo-div">{"{PB}"}</div>
        </div>
        <div className="ball-medium"></div>
        <div className="ball-small"></div>
      </div>
    </div>
  );
}

export default NameSection;