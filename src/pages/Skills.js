import './css/skills.css';

function Skills() {
  return (
    <div className='skills-section'>
      <div className='heading'>
        <div className='title'>Technical Skills</div>
        <div className='subtitle'>Comprehensive expertise across the full technology stack</div>
      </div>
      <div className='content'>
        <div className='card first-card'>
          <div className='progressbar'></div>
          <div className="card-title">Frontend</div>
          <div className='card-content'>
            <div className='skill'>
              <div className='name'>ReactJS</div>
              <div className='percentage'>95%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '95%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Redux</div>
              <div className='percentage'>90%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '90%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>JavaScript</div>
              <div className='percentage'>95%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '95%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>TypeScript</div>
              <div className='percentage'>85%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '85%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>HTML/CSS</div>
              <div className='percentage'>95%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '95%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Bootstrap</div>
              <div className='percentage'>90%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
        <div className='card second-card'>
          <div className='progressbar'></div>
          <div className="card-title">Backend</div>
          <div className='card-content'>
            <div className='skill'>
              <div className='name'>Node.js</div>
              <div className='percentage'>90%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '90%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>API Development</div>
              <div className='percentage'>95%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '95%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Java</div>
              <div className='percentage'>75%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '75%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Database Design</div>
              <div className='percentage'>80%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '80%'}}></div>
            </div>
          </div>
        </div>
        <div className='card third-card'>
          <div className='progressbar'></div>
          <div className="card-title">Cloud & DevOps</div>
          <div className='card-content'>
            <div className='skill'>
              <div className='name'>AWS Lambda</div>
              <div className='percentage'>85%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '85%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>CloudWatch</div>
              <div className='percentage'>80%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '80%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>RDS/DynamoDB</div>
              <div className='percentage'>85%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '85%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>CI/CD</div>
              <div className='percentage'>80%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '80%'}}></div>
            </div>
          </div>
        </div>
        <div className='card fourth-card'>
          <div className='progressbar'></div>
          <div className="card-title">Tools & Others</div>
          <div className='card-content'>
            <div className='skill'>
              <div className='name'>AEM</div>
              <div className='percentage'>85%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '85%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Git/GitHub</div>
              <div className='percentage'>95%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '95%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Jira</div>
              <div className='percentage'>90%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '90%'}}></div>
            </div>
            <div className='skill'>
              <div className='name'>Testing</div>
              <div className='percentage'>85%</div>
            </div>
            <div className='outer-progressbar'>
              <div className='inner-progressbar' style={{width: '85%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;