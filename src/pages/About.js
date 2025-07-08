import './css/about.css';

function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="top-section">
        <div className="heading">About Me</div>
        <div className="subheading">
          Passionate developer with expertise in modern web technologies and
          cloud solutions
        </div>
      </div>
      <div className="about-details">
        <div className="left">
          <div className="heading">Professional Journey</div>
          <div className="content">
            <p>
              With over 4.5 years of experience as a Senior Software Developer,
              I specialize in ReactJS, Node.js, and AEM development. My
              expertise spans full-stack development, cloud deployments on AWS,
              production issue handling, API integrations, and agile
              methodologies.
            </p>
            <p>
              I have successfully delivered multiple high-impact projects, from
              full-stack web applications to complex reporting tools with
              dynamic filtering capabilities. My experience includes working
              with various cloud services, implementing CI/CD pipelines, and
              ensuring optimal performance in production environments.
            </p>
            <p className='m-0'>
              I'm passionate about writing clean, maintainable code and staying
              up-to-date with the latest technologies and best practices in
              software development.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="education-section">
            <div className="title">Education</div>
            <div className="subtitle">Bachelor of Engineering</div>
            <div className="content">
              <div>Electronics and Telecommunication</div>
              <div>MIT Pune, 2016–2020</div>
            </div>
          </div>
          <div className="interests-section">
            <div className="title">Interests</div>
            <ul>
              <li>Travelling</li>
              <li>Reading</li>
              <li>Technology</li>
            </ul>
          </div>
          <div className='strengths-section'>
            <div className="title">Key Strengths</div>
            <ul>
              <li>Full-stack development expertise</li>
              <li>Cloud architecture & deployment</li>
              <li>API design & integration</li>
              <li>Performance optimization</li>
              <li>Team collaboration & mentoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
