import { useEffect, useState } from 'react';
import './css/navbar.css';
import Modal from 'react-modal';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`navigation-section ${
        scrolled ? 'shadow-md' : ''
      }`}>
      <div className="logo-div">{"{PB}"}</div>
      {/* <img className="logo-styles" src={LogoLight} alt="logo" /> */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#name-section">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <button className="btn btn-primary" onClick={() => setOpen(true)}>Preview Resume</button>
      </div>
      <Modal
        isOpen={open}
        className={'pdf-preview-modal'}
        onRequestClose={() => setOpen(false)}
        style={{
          content: {
            maxWidth: '800px',
            maxHeight: 'calc(80vh + 100px)',
            margin: 'auto',
            padding: '0',
            borderRadius: '8px'
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 9999,
          },
        }}
      >
        <div style={{ textAlign: 'right', marginTop: '1rem', marginRight: '1.5rem' }}>
          <button className='btn btn-primary m-2' onClick={() => setOpen(false)}><a href="/Punam-Bora-Resume-Latest.pdf" download>Download</a></button>
          <button className='btn btn-primary' onClick={() => setOpen(false)}>Close</button>
        </div>
        <div style={{ padding: '0.5rem', background: '#fff' }}>
          <iframe
            src="/Punam-Bora-Resume-Latest.pdf#toolbar=0&navpanes=0&view=FitH"
            title="Resume Preview"
            width="100%"
            style={{
              height: '100vh',
              width: 'calc(100vw - 50px)',
              maxWidth: '780px',
              border: '1px solid #ccc',
              borderRadius: '6px',
            }}
          />
        </div>
      </Modal>
      </>
  )
}

export default Navbar;