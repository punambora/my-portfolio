import './css/footer.css';

function Footer() {
  const contacts = [
    {
      type: 'punamdbora@gmail.com',
      value: 'punamdbora@gmail.com',
      href: 'mailto:punamdbora@gmail.com',
    },
    {
      type: '+91 9130105255',
      value: '+91 9130105255',
      href: 'tel:+919130105255',
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/punambora',
      href: 'https://linkedin.com/in/punambora',
    },
    {
      type: 'GitHub',
      value: 'github.com/punambora',
      href: 'https://github.com/punambora',
    },
  ];

  return (
    <div className="footer-section">
      <div className="first-section">
        <div className="about-details">
          <div className='title'>{'<PB />'}</div>
          <div className='subtitle'>Senior Software Developer specializing in ReactJS, Node.js, and AEM.
          Passionate about building scalable web applications and solving
          complex problems.</div>
        </div>
        <div className="link-section">
          <div className='title'>Quick Links</div>
          <ul>
            <li><a className="nav-link" href="#about-section">About</a></li>
            <li><a className="nav-link" href="#skills-section">Skills</a></li>
            <li><a className="nav-link" href="#experience-section">Experience</a></li>
            <li><a className="nav-link" href="#projects-section">Projects</a></li>
            <li><a className="nav-link" href="#contact-section">Contact</a></li>
          </ul>
        </div>
        <div className="connect-section">
          <div className='title'>Connect</div>
          <ul>
            {contacts.map((contact, index) =>
              <li key={index}><a href={contact.href}>{contact.type}</a></li>
            )}
          </ul>
        </div>
      </div>
      <hr />
      <div className="second-section">
        <div className="copyright">© 2025 Punam Bora. All rights reserved.</div>
        <button>Back to Top</button>
      </div>
    </div>
  );
}

export default Footer;
