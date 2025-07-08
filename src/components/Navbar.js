import { Link } from 'react-router-dom';
import LogoLight from '../images/LogoLight.jpg'
import './css/navbar.css';

function Navbar() {
  return (
    <div className='navigation-section'>
      <div className="logo-div">{"{PB}"}</div>
      {/* <img className="logo-styles" src={LogoLight} alt="logo" /> */}
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <button className="btn btn-primary"><a href="/../../public/Punam-Bora-Resume-Latest.pdf" download>Download Resume</a></button>
    </div>
  )
}

export default Navbar;