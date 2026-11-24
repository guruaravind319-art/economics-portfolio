
import "./App.css";
import profileImage from "./assets/images/guru-aravind.png";

import {
  ArrowUpRight,
  ArrowRight,
  ArrowDownToLine,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
];

function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-container">

        <a href="#home" className="logo">
          GA<span>.</span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a href={item.link} key={item.name}>
              {item.name}
            </a>
          ))}

          <a href="#contact" className="nav-contact">
            Let's Connect <ArrowUpRight size={15} />
          </a>
        </div>

      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            <span>●</span> ECONOMICS UNDERGRADUATE
          </span>

          <h1 className="hero-title">
            Hello, I'm
            <br />
            <span>Guru Aravind M.</span>
          </h1>

          <h2 className="hero-role">
            Economics | Finance | Business Operations
          </h2>

          <p className="hero-description">
            An Economics undergraduate at Loyola College,
            Chennai, with practical exposure to banking
            operations, accounting processes and financial
            documentation. Interested in applying analytical
            thinking and economic knowledge to real-world
            business challenges.
          </p>

          <div className="hero-buttons">

            <a href="#about" className="btn btn-primary">
              Explore My Profile
              <ArrowRight size={17} />
            </a>

            <a href="#contact" className="btn btn-outline">
              <Mail size={17} />
              Get in Touch
            </a>

            <a
  href="/Guru_Aravind_M_Resume.pdf"
  className="btn btn-primary"
  download
>
  Download Resume
  <ArrowDownToLine size={17} />
</a>

          </div>

          <div className="hero-bottom-note">
            <span className="hero-line"></span>
            <span>OPEN TO ENTRY-LEVEL OPPORTUNITIES</span>
          </div>

          <div className="hero-contact-details">

            <span>
              <MapPin size={15} />
              Thiruvallur, Tamil Nadu
            </span>

            <a href="mailto:guruaravind2006@gmail.com">
              <Mail size={15} />
              Email
            </a>

            <a href="tel:+916374474528">
              <Phone size={15} />
              Contact
            </a>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <img
            src={profileImage}
            alt="Guru Aravind M"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}


function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="section-label">GET TO KNOW ME</span>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Building a strong foundation in
              Economics and Finance.
            </h3>

            <p>
              I am Guru Aravind M, a third-year
              Economics undergraduate at Loyola College,
              Chennai. My academic journey has helped
              me develop an understanding of economic
              principles, financial concepts and
              business operations.
            </p>

            <p>
              Through a one-month internship at State
              Bank of India, I gained practical exposure
              to banking operations, customer service,
              account handling and financial documentation.
            </p>

            <p>
              I am eager to apply my knowledge,
              analytical thinking and willingness to
              learn in a professional environment while
              continuously developing my skills.
            </p>
          </div>

          <div className="about-details">
            <div className="about-detail-item">
              <span>01</span>
              <div>
                <h4>Education</h4>
                <p>B.A. Economics</p>
              </div>
            </div>

            <div className="about-detail-item">
              <span>02</span>
              <div>
                <h4>Institution</h4>
                <p>Loyola College, Chennai</p>
              </div>
            </div>

            <div className="about-detail-item">
              <span>03</span>
              <div>
                <h4>Experience</h4>
                <p>Banking Internship – SBI</p>
              </div>
            </div>

            <div className="about-detail-item">
              <span>04</span>
              <div>
                <h4>Career Interest</h4>
                <p>Finance & Business Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-heading">
          <span className="section-label">
            ACADEMIC BACKGROUND
          </span>
          <h2>
            My <span>Education</span>
          </h2>
          <p>
            The academic foundation shaping my
            understanding of economics and finance.
          </p>
        </div>

        <div className="education-card">
          <div className="education-year">
            2024 — 2027
          </div>

          <div className="education-info">
            <span className="education-level">
              UNDERGRADUATE DEGREE
            </span>

            <h3>Bachelor of Arts in Economics</h3>

            <h4>Loyola College, Chennai</h4>

            <p>
              Currently pursuing the third year of
              undergraduate studies, developing
              knowledge of economic principles,
              financial concepts and analytical
              approaches to business and society.
            </p>

            <span className="education-status">
              Currently Pursuing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading">
          <span className="section-label">
            PROFESSIONAL JOURNEY
          </span>
          <h2>
            Work <span>Experience</span>
          </h2>
          <p>
            Practical exposure and learning beyond
            the classroom.
          </p>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <span className="experience-type">
                INTERNSHIP
              </span>
              <h3>State Bank of India</h3>
              <h4>Banking Intern</h4>
            </div>

            <span className="experience-duration">
              22 March – 22 April 2026
            </span>
          </div>

          <p className="experience-description">
            Completed a 30-day internship gaining
            practical exposure to banking operations
            and day-to-day branch activities.
          </p>

          <h5>Key Learning Areas</h5>

          <ul className="experience-list">
            <li>Banking operations and branch processes</li>
            <li>Customer service and account handling</li>
            <li>Banking documentation and record management</li>
            <li>Professional communication and teamwork</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="section-label">
            KNOWLEDGE & CAPABILITIES
          </span>
          <h2>
            My <span>Skills</span>
          </h2>
          <p>
            A combination of technical knowledge
            and professional strengths.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-number">01</span>
            <h3>Accounting Software</h3>
            <ul>
              <li>Tally ERP</li>
              <li>Tally Prime</li>
            </ul>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <h3>Office Applications</h3>
            <ul>
              <li>MS Excel</li>
              <li>MS Word</li>
              <li>MS PowerPoint</li>
            </ul>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <h3>Professional Skills</h3>
            <ul>
              <li>Communication</li>
              <li>Analytical Thinking</li>
              <li>Teamwork & Collaboration</li>
              <li>Time Management</li>
              <li>Problem-Solving</li>
            </ul>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <h3>Personal Strengths</h3>
            <ul>
              <li>Adaptability</li>
              <li>Attention to Detail</li>
              <li>Initiative & Leadership</li>
              <li>Willingness to Learn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


function Languages() {
  return (
    <section className="languages-section" id="languages">
      <div className="languages-container">
        <div className="languages-heading">
          <span className="section-label">
            COMMUNICATION
          </span>
          <h2>
            Languages <span>Known</span>
          </h2>
          <p>
            Communicating confidently across
            different languages.
          </p>
        </div>

        <div className="languages-grid">
          <div className="language-card">
            <span className="language-number">01</span>
            <h3>English</h3>
            <p>Read, Write & Speak</p>
            <span className="language-level">
              Proficient
            </span>
          </div>

          <div className="language-card">
            <span className="language-number">02</span>
            <h3>Tamil</h3>
            <p>Read, Write & Speak</p>
            <span className="language-level">
              Native
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-label">
            LET'S CONNECT
          </span>

          <h2>
            Get in <span>Touch</span>
          </h2>

          <p>
            Interested in connecting or discussing
            professional opportunities? Feel free
            to reach out.
          </p>
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={22} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:guruaravind2006@gmail.com">
                guruaravind2006@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={22} />
            </div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+916374474528">
                +91 63744 74528
              </a>
            </div>
          </div>

          <div className="contact-item">
  <div className="contact-icon">
    <ArrowUpRight  size={22} />
  </div>

  <div>
    <h3>LinkedIn</h3>
    <a
      href="https://www.linkedin.com/in/guru-aravind-m-656b1a39b/"
      target="_blank"
      rel="noopener noreferrer"
    >
      View LinkedIn Profile
      <ArrowUpRight size={15} />
    </a>
  </div>
</div>

          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={22} />
            </div>
            <div>
              <h3>Location</h3>
              <p>Thiruvallur, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-subtitle">MY WORK</span>
          <h2 className="section-title">Academic Projects & Research</h2>
          <p>
            Research projects demonstrating my understanding
            of economics, data analysis and research methods.
          </p>
        </div>

        </div>

<div className="projects-grid">
  {/* Project 1 */}
  <div className="project-card">
    <span className="project-category">ENTREPRENEURIAL ECONOMICS</span>
    <h3>Digital Transformation of Entrepreneurship in India Since 2018</h3>
    <p>
      A survey-based research study examining how UPI,
      e-commerce, digital marketing, online banking and
      emerging technologies have transformed entrepreneurship
      and business operations in India.
    </p>
    <div className="project-highlights">
      <span>47 Responses</span>
      <span>20 Questions</span>
      <span>76.6% Digital Adoption</span>
    </div>
    <p className="project-tools">
      Tools: Google Forms, Microsoft Excel and graphical analysis
    </p>
  </div>

  {/* Project 2 */}
  <div className="project-card">
    <span className="project-category">RESEARCH METHODS</span>
    <h3>A Study on Sleep Pattern and Academic Performance Among Undergraduate Students</h3>
    <p>
      A research report examining sleep schedules, academic
      workload, daily routines and academic performance using
      frequency distribution, percentage analysis and graphs.
    </p>
    <div className="project-highlights">
      <span>20 Questions</span>
      <span>75-Record Prepared Dataset</span>
      <span>Statistical Analysis</span>
    </div>
    <p className="project-tools">
      Note: The 75-record dataset was prepared for research demonstration.
    </p>
  </div>
</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          GA<span>.</span>
        </a>

        <p>
          Economics undergraduate | Finance |
          Business Operations
        </p>

        <span className="footer-copyright">
          © {new Date().getFullYear()} Guru Aravind M.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <Contact />
      </main>
      
      
      
      <Footer />
      

    </div>
  );
}

export default App;
