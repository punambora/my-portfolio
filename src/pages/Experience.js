import './css/experience.css';

function Experience() {
  const experience = [
    {
      role: 'Senior Software Developer',
      organization: 'The Cloudfountain',
      startDate: '04/2023',
      details: [
        'Developed full-stack web applications using ReactJS and Node.js',
        'Built comprehensive reporting tools with dynamic filtering capabilities',
        'Implemented API integrations and data visualization components',
        'Managed AWS deployments and production issue resolution',
        'Collaborated with cross-functional teams in agile environment',
      ],
      skills: [
        'ReactJS',
        'Node.js',
        'AWS',
        'API Integration',
        'Reporting Tools',
      ],
    },
    {
      role: 'AEM Developer',
      organization: 'LTIMindtree',
      startDate: '04/2022',
      endDate: '04/2023',
      details: [
        'Specialized in Adobe Experience Manager (AEM) development',
        'Implemented complex API integrations with third-party systems',
        'Collaborated directly with clients for requirement gathering',
        'Developed custom AEM components and templates',
        'Optimized content management workflows',
      ],
      skills: [
        'AEM',
        'Java',
        'API Integration',
        'CRXDE',
        'Client Collaboration',
      ],
    },
    {
      role: 'ReactJS Developer',
      organization: 'LTIMindtree',
      startDate: '10/2020',
      endDate: '04/2022',
      details: [
        'Built responsive web applications using ReactJS and Redux',
        'Integrated RESTful APIs for dynamic data management',
        'Resolved production issues and implemented bug fixes',
        'Implemented comprehensive testing using React Testing Library',
        'Participated in code reviews and knowledge sharing sessions',
      ],
      skills: [
        'ReactJS',
        'Redux',
        'API Integration',
        'React Testing Library',
        'JavaScript',
      ],
    },
  ];

  return (
    <section
      className="experience-section"
      id="experience"
    >
      <div className="top-section">
        <div className="heading">Professional Experience</div>
        <div className="subheading">
          4.5+ years of professional software development experience
        </div>
      </div>
      <div className="content">
        {experience.map((item, index) => (
          <div key={index} className='card-container'>
            <div className="dot"></div>
            <div className="line"></div>
            <div
              className="card"
            >
              <div className="d-flex">
                <div>
                  <div className="role">{item.role}</div>
                  <div className="organization">{item.organization}</div>
                </div>
                <div className="timeline">
                  {item.startDate} – {item.endDate || 'Present'}
                </div>
              </div>
              <div className="details">
                <ul>
                  {item.details.map((detail) => (
                    <li><span className='bullet'></span><span>{detail}</span></li>
                  ))}
                </ul>
              </div>
              <div className="skills">
                <ul>
                  {item.skills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
