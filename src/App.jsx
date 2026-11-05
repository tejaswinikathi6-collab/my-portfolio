
import "./App.css";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">Tejaswini.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Tejaswini</span>
          </h1>

          <h2>Computer Science Student</h2>

          <p>
            I am passionate about web development and
            building creative applications. I enjoy
            learning new technologies and developing
            real-world projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              Explore My Work
            </a>
            <a
            href="/Tejaswini-Resume.pdf"
            download
            className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
          src="/profile.jpg"
          alt="Tejaswini Profile"
          className="profile-photo"
          />
        </div>
      </section>
            {/* About Section */}
      <section id="about" className="about">

        <h2>About Me</h2>

        <p className="about-text">
          Hello! I'm Tejaswini, a Computer Science
          student passionate about technology and
          web development.

          I enjoy creating websites, learning new
          programming languages and developing
          real-world applications.

          My goal is to become a skilled Full Stack
          Developer and build useful applications.
        </p>

        <div className="about-details">
          <div>
            <h3>Education</h3>
            <p>B.Tech - Computer Science Engineering</p>
          </div>

          <div>
            <h3>Interest</h3>
            <p>Web Development & Programming</p>
          </div>

          <div>
            <h3>Career Goal</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>

      </section>
      
      {/* Skills Section */}
      <section id="skills" className="skills">

        <h2>My Technical Skills</h2>

        <p className="skills-description">
          Technologies and tools I use for development.
        </p>

        <div className="skills-container">

          <div className="skill-card">
            <h3>HTML</h3>
            <p>Web Page Structure</p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Web Page Styling</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Interactive Websites</p>
          </div>

          <div className="skill-card">
            <h3>React.js</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <h3>Node.js</h3>
            <p>Backend Development</p>
          </div>

          <div className="skill-card">
            <h3>Express.js</h3>
            <p>Backend Framework</p>
          </div>

          <div className="skill-card">
            <h3>MongoDB</h3>
            <p>Database Management</p>
          </div>

          <div className="skill-card">
            <h3>Bootstrap</h3>
            <p>Responsive Design</p>
          </div>

          <div className="skill-card">
            <h3>Python</h3>
            <p>Programming</p>
          </div>

        </div>

      </section>
      
      {/* Projects Section */}
      <section id="projects" className="projects">

        <h2>My Projects</h2>

        <p className="projects-description">
          Here are some projects I have worked on.
        </p>

        <div className="projects-container">

          <div className="project-card">
            <div className="project-icon">🌦️</div>
            <h3>Weather Dashboard</h3>
            <p>
              A weather application that displays
              current weather and forecasts using an API.
            </p>
            <span>React.js | CSS | API</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🩸</div>
            <h3>Blood Donation App</h3>
            <p>
              A platform that connects blood donors
              with people who need blood.
            </p>
            <span>HTML | CSS | JavaScript</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🪪</div>
            <h3>Digital ID Card</h3>
            <p>
              A React application for creating
              digital student identity cards.
            </p>
            <span>React.js | CSS</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🏨</div>
            <h3>Hostel Management System</h3>
            <p>
              A system to manage student details,
              room allocation and hostel fees.
            </p>
            <span>HTML | CSS | JavaScript</span>
          </div>

        </div>

      </section>
      
      {/* Education Section */}
      
{/* Education Section */}
<section id="education" className="education">

  <h2>My Education</h2>

  <p className="education-description">
    My academic journey and qualifications.
  </p>

  <div className="education-container">

    {/* B.Tech */}
    <div className="education-card">
      <div className="education-icon">🎓</div>

      <h3>Bachelor of Technology (B.Tech)</h3>

      <h4>Computer Science and Engineering</h4>

      <p>College: Vignan University</p>

      <p>Academic Year: 2024 - 2028</p>

      <span>Currently Pursuing</span>
    </div>

    {/* Intermediate */}
    <div className="education-card">
      <div className="education-icon">📚</div>

      <h3>Intermediate</h3>

      <p>College: Bhashyam Junior College</p>

      <p>Stream: MPC</p>

      <p>Academic Year: 2022 - 2024</p>

      <span>Completed</span>
    </div>

  </div>

</section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">

        <h2>Certifications & Achievements</h2>

        <p className="cert-description">
          My learning journey and accomplishments.
        </p>

        <div className="cert-container">

          <div className="cert-card">
            <div className="cert-icon">🏅</div>
            <h3>NPTEL Certification</h3>
            <p>Online course certification.</p>
            <span>Certificate</span>
          </div>

          <div className="cert-card">
            <div className="cert-icon">💻</div>
            <h3>Web Development</h3>
            <p>Learning frontend and backend development.</p>
            <span>Technical Skills</span>
          </div>

          <div className="cert-card">
            <div className="cert-icon">📜</div>
            <h3>Technical Workshops</h3>
            <p>Participation in technical learning activities.</p>
            <span>Participation</span>
          </div>

        </div>

      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact">

        <h2>Contact Me</h2>

        <p className="contact-description">
          Have a project or opportunity? Feel free to contact me!
        </p>

        <div className="contact-container">

          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p>📧 Email: tejaswinikathi6@gmail.com</p>

            <p>
              💻 GitHub: 
              <a href="https://github.com/yourusername"
                 target="_blank"
                 rel="noreferrer">
                Visit GitHub
              </a>
            </p>

            <p>
              🔗 LinkedIn:
              <a href="https://linkedin.com/in/yourusername"
                 target="_blank"
                 rel="noreferrer">
                Visit LinkedIn
              </a>
            </p>

          </div>

          <form className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for contacting me!");
                }}>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>
      
      {/* Footer Section */}
      <footer className="footer">

        <h2>Tejaswini.</h2>

        <p>
          Computer Science Student | Aspiring Full Stack Developer
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a href="https://github.com/"
             target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/"
             target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="copyright">
          © 2026 Tejaswini. All Rights Reserved.
        </p>

      </footer>


    </div>
  );
}

export default App;
