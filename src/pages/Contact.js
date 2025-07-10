import { useState } from 'react';
import './css/contact.css';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  const contacts = [
    {
      type: 'Email',
      value: 'punamdbora@gmail.com',
      href: 'mailto:punamdbora@gmail.com',
      icon: FaEnvelope
    },
    {
      type: 'Phone',
      value: '+91 9130105255',
      href: 'tel:+919130105255',
      icon: FaPhone
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/punambora',
      href: 'https://linkedin.com/in/punambora',
      icon: FaLinkedin
    },
    {
      type: 'GitHub',
      value: 'github.com/punambora',
      href: 'https://github.com/punambora',
      icon: FaGithub
    },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!name) {
      alert("Please enter a name.");
      return;
    }

    if (!subject) {
      alert("Please enter a subject.");
      return;
    }

    if (!message) {
      alert("Please enter a message.");
      return;
    }
    console.log('detail: ', { name, email, subject, message });
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      { name: name, email: email, message: message, title: subject },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent!');
        setEmail('');
        setMessage('');
        setName('');
        setSubject('');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Something went wrong.');
      }
    );
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="top-section">
        <div className="heading">Get In Touch</div>
        <div className="subheading">
          Let's discuss your next project or explore opportunities to work
          together
        </div>
      </div>
      <div className="content">
        <div className="left">
          <div className="form">
            <div className="title">Send a Message</div>
            <div className="row">
              <div className="col-md-6">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <label>Subject</label>
            <input
              type="text"
              placeholder="Project Discussion / Job Opportunity / Collaboration"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label>Message</label>
            <textarea
              placeholder="Tell me about your project or opportunity..."
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              className="btn btn-primary"
              onClick={() => sendEmail()}
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="right">
          <div className="contact-info-section">
            <div className="title">Contact Information</div>
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`${contact.type.toLowerCase()}-section detail-section`}
              >
                <div className="initial"><contact.icon></contact.icon></div>
                <div className="contact-detail-section">
                  <div className="contact-type">{contact.type}</div>
                  <a
                    className="contact-value"
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="resume-section">
            <div className="title">Let's Build Something Amazing</div>
            <div className="subtitle">
              I'm always excited to work on challenging projects and collaborate
              with talented teams. Whether you have a specific project in mind
              or just want to connect, I'd love to hear from you.
            </div>
            <button className="btn">
              <a
                href="/Punam-Bora-Resume-Latest.pdf"
                download
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
