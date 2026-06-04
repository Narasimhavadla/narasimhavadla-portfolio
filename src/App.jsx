import { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Code2, 
  Download, 
  Send, 
  Mail, 
  BookOpen, 
  Award, 
  ArrowRight, 
  ChevronUp, 
  Menu, 
  X, 
  Briefcase, 
  MessageSquare,
  Smartphone,
  Info,
  Calendar,
  MapPin,
  FileText
} from 'lucide-react';
import growb from "../public/media/growb.png";
import dnk from "../public/media/dnk.jpeg";
import zennx from "../public/media/zennx.jpeg";
import medisys from "../public/media/medisys.jpg";
import crm from "../public/media/crm.jpeg";

const Github = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | 'submitting'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Digital Lync',
      period: 'Previous',
      points: [
        'Built and maintained responsive web applications using React.js, Node.js, Spring Boot, and PostgreSQL.',
        'Designed and integrated RESTful APIs for backend data management and user interactions.',
        'Collaborated with designers to translate UI/UX wireframes into production-ready web pages.',
        'Applied Git branching strategies and participated in code reviews for team-based development.'
      ]
    },
    {
      role: 'Frontend Web Developer',
      company: 'Stnup',
      period: 'Previous',
      points: [
        'Developed scalable, maintainable UIs using HTML5, CSS3, JavaScript, and React.js.',
        'Optimised page performance through lazy loading, code splitting, and client-side caching.',
        'Integrated front-end modules with backend REST APIs in close collaboration with backend developers.'
      ]
    }
  ];

  const projects = [
    {
      title: 'Grow-B Event & Stall Ecosystem',
      category: 'Full Stack',
      desc: 'Developed Grow-B, a full-stack event & stall ecosystem platform connecting vendors, organizers, sponsors, and venue sellers to discover, book, and manage exhibition stalls and event venues across major Indian cities. Implemented multi-role authentication (Admin/Vendor/Organizer/Sponsor/Venue Seller) with JWT-based secure login, dashboards, in-app chat via Socket.io, and a cross-platform React Native (Expo) mobile app.',
      image: growb,
      demo: 'https://www.growb.co.in/',
      // github: 'https://github.com/Narasimhavadla',
      tags: ['React.js', 'Node.js', 'MySQL', 'React Native', 'Socket.io', 'JWT']
    },
    {
      title: 'D&K Technologies Website',
      category: 'Full Stack',
      desc: 'Developed D&K, a corporate portfolio website for D&K Technologies showcasing business services including RCS solutions, software, app, and web development. Features a responsive React.js frontend with service showcase pages, project portfolios, and testimonials integrated with a Node.js backend API and MySQL database for content management and lead generation.',
      image: dnk,
      demo: 'https://dnktechnologies.co.in/',
      // github: 'https://github.com/Narasimhavadla',
      tags: ['React.js', 'Node.js', 'MySQL', 'SEO Optimization']
    },
    {
      title: 'ZennX Geo Tracker',
      category: 'Full Stack',
      desc: 'Developed Zennx Geo-Tracker, a location-based field visit tracking system for marketing teams to monitor visits, capture GPS coordinates, collect responses, and analyze performance. Features interactive maps with visit paths, real-time location sync using Firebase Realtime Database, and Excel export tools for team productivity reports.',
      image: zennx,
      // demo: '#',
      // github: 'https://github.com/Narasimhavadla',
      tags: ['React Vite', 'Node.js', 'Firebase', 'Maps API']
    },
    {
      title: 'Medisys Bill Tracker',
      category: 'Full Stack',
      desc: 'Developed Bill Tracker, a real-time bill management system for Medisys pharma mall enabling users to track bill progress across stages (billed, picking, checking, collect). Features dashboard trackers for staff and clients, live order updates, and optimized MySQL database architecture for secure data handling.',
      image: medisys,
      // demo: '#',
      // github: 'https://github.com/Narasimhavadla',
      tags: ['React.js', 'Next.js', 'Node.js', 'MySQL']
    },
    {
      title: 'Customer Relationship Management (CRM)',
      category: 'Frontend / Backend',
      desc: 'Developed an educational institute CRM system with dedicated modules for managing leads, student opportunities, learners database, and course tracking. Implemented real-time dashboard analytics providing insights on lead pipeline and learning progress using React components and PostgreSQL.',
      image: crm,
      // demo: '#',
      // github: 'https://github.com/Narasimhavadla',
      tags: ['React.js', 'PostgreSQL', 'Dashboard Analytics']
    }
  ];

  const education = [
    {
      degree: 'B.Tech – Electronics & Communication',
      institution: 'Siddharth Institute of Engineering & Technology',
      period: 'Jun 2020 – May 2024',
      grade: 'CGPA: 9.27'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Medha Junior College',
      period: 'Jun 2018 – Mar 2020',
      grade: 'Percentage: 96.9%'
    },
    {
      degree: 'SSC',
      institution: 'Sri Shirdi Sai High School',
      period: 'Jun 2017 – Mar 2018',
      grade: 'GPA: 9.8'
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend / Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter) || activeFilter === 'Full Stack' && p.category === 'Full Stack');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <div className="bg-glow-container">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-glow-3"></div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="luxury-container nav-wrapper">
          <a href="#" className="logo">
            Lakshmi Narasimha<span>.</span>
          </a>
          
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://api.whatsapp.com/send?phone=916300157188&text=Hi%20Narasimha,%20I%20saw%20your%20portfolio" target="_blank" className="nav-cta">
              Hire Me
            </a>
          </div>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#experience" className="mobile-link" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" className="mobile-link" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" className="mobile-link" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</a>
        <a 
          href="https://api.whatsapp.com/send?phone=916300157188&text=Hi%20Narasimha,%20I%20saw%20your%20portfolio" 
          target="_blank" 
          className="nav-cta"
          style={{ display: 'inline-block', marginTop: '16px' }}
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section luxury-container">
        <div className="hero-grid animate-fade-in-up">
          <div>
            <div className="hero-badge">
              <span></span> Available for freelance & full-time roles
            </div>
            <h1 className="hero-title text-gradient">
              Hi, I'm <span className="gold-gradient">Lakshmi Narasimha Vadla</span>
            </h1>
            <h2 className="hero-subtitle">
              Professional Full Stack Developer
            </h2>
            <p className="hero-desc">
              Specialized in crafting premium, high-performance web applications. Expert in React.js, Node.js, Spring Boot, MySQL, PostgreSQL, and cross-platform mobile apps.
            </p>
            <div className="hero-buttons">
              <a href="https://api.whatsapp.com/send?phone=916300157188&text=Hi%20Narasimha,%20I%20saw%20your%20portfolio" target="_blank" className="btn-luxury btn-luxury-primary">
                Connect <Send size={16} />
              </a>
              <a href="/media/Narasimha_Vadla_Resume.docx" download className="btn-luxury btn-luxury-secondary">
                Resume <FileText size={16} />
              </a>
            </div>
          </div>
          
          <div className="hero-avatar-container">
            <div className="hero-avatar-border animate-float">
              <img 
                src="/media/epic-removebg-preview.png" 
                alt="Lakshmi Narasimha Vadla" 
                className="hero-avatar-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="luxury-container">
        <div className="stats-grid">
          <div className="stat-card glass-card">
            <div className="stat-icon">
              <Code2 size={22} />
            </div>
            <h3 className="stat-title">Technical Skills</h3>
            <p className="stat-desc">
              React.js, Next.js, Node.js, Spring Boot, PostgreSQL, MySQL, and Java/Python.
            </p>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-icon">
              <BookOpen size={22} />
            </div>
            <h3 className="stat-title">Education</h3>
            <p className="stat-desc">
              B.Tech in ECE with 9.27 CGPA. Excellent academic foundation.
            </p>
          </div>
          <div className="stat-card glass-card">
            <div className="stat-icon">
              <Award size={22} />
            </div>
            <h3 className="stat-title">Full Stack Projects</h3>
            <p className="stat-desc">
              Built and deployed highly interactive apps covering CRM, event booking, geo-trackers, and billing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section luxury-container">
        <span className="section-subtitle">Work History</span>
        <h2 className="section-title text-gradient">Professional Experience</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '40px' }}>
          {experience.map((exp, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--color-gold)' }}>{exp.role}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '500' }}>{exp.company}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                  <Calendar size={14} /> {exp.period}
                </div>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} style={{ fontSize: '14px', color: 'var(--text-secondary)', display: 'flex', gap: '10px' }}>
                    <span style={{ color: 'var(--color-gold)' }}>✦</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section luxury-container">
        <div className="portfolio-header">
          <div>
            <span className="section-subtitle">My Portfolio</span>
            <h2 className="section-title text-gradient" style={{ marginBottom: 0 }}>Latest Projects</h2>
          </div>
          
          <div className="filters-wrapper">
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image-wrapper">
                {project.image && !(typeof project.image === 'string' && project.image.includes('_placeholder')) ? (
                  <img src={project.image} alt={project.title} className="project-image" style={{ width: '100%', height: '90%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0e0e14', color: 'rgba(255,255,255,0.1)' }}>
                    <Briefcase size={48} />
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <span className="section-subtitle" style={{ fontSize: '10px', marginBottom: '8px' }}>
                  {project.category}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-actions">
                  <a href={project.demo} className="project-link">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.github} target="_blank" className="project-link">
                    Codebase <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section (Education, Skills, Tools) */}
      <section id="about" className="section luxury-container">
        <span className="section-subtitle">Profile</span>
        <h2 className="section-title text-gradient">About Me & Education</h2>
        
        <div className="about-grid">
          <div className="about-img-wrapper">
            <img src="/media/pic.jpg" alt="Profile" className="about-img" />
          </div>
          
          <div className="about-content">
            <p>
              I am an experienced Full Stack Developer with a proven record of building event stall booking systems, geolocation tracking dashboards, and medical billing sync platforms. I focus on developing clean backend workflows and modular React visual structures.
            </p>
            
            <h4 style={{ fontSize: '18px', color: 'var(--color-gold)', marginBottom: '16px', marginTop: '24px' }}>Education Background</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: '16px' }}>
                  <h5 style={{ fontSize: '15px', color: 'var(--text-primary)' }}>{edu.degree}</h5>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '4px 0' }}>{edu.institution}</p>
                  <div style={{ display: 'flex', justifyContent: 'between', flexWrap: 'wrap', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span>{edu.period}</span>
                    <span style={{ marginLeft: 'auto', color: 'var(--color-gold)' }}>{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="tools-title">Technical Skillset</h4>
            <div className="tools-row" style={{ marginBottom: '24px' }}>
              <span className="tool-item">React.js</span>
              <span className="tool-item">Next.js</span>
              <span className="tool-item">Node.js</span>
              <span className="tool-item">Spring Boot</span>
              <span className="tool-item">PostgreSQL</span>
              <span className="tool-item">MySQL</span>
              <span className="tool-item">Firebase</span>
              <span className="tool-item">Java</span>
              <span className="tool-item">Python</span>
            </div>
            
            <h4 className="tools-title">Professional Tools I Use</h4>
            <div className="tools-row">
              <span className="tool-item">VS Code</span>
              <span className="tool-item">IntelliJ</span>
              <span className="tool-item">PyCharm</span>
              <span className="tool-item">Figma</span>
              <span className="tool-item">Git & GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section luxury-container">
        <span className="section-subtitle">Connect With Me</span>
        <h2 className="section-title text-gradient">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info-card glass-card">
            <div className="contact-method">
              <div className="contact-method-icon">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="contact-method-title">Email Direct</h4>
                <a href="mailto:narasimhavadla2002@gmail.com" className="contact-method-value">
                  narasimhavadla2002@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-method-icon">
                <Smartphone size={18} />
              </div>
              <div>
                <h4 className="contact-method-title">WhatsApp / Call</h4>
                <a href="https://api.whatsapp.com/send?phone=916300157188" target="_blank" className="contact-method-value">
                  +91 63001 57188
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-method-icon">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="contact-method-title">Location</h4>
                <p className="contact-method-value">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>

            <div className="social-icons-row">
              <a href="https://www.linkedin.com/in/lakshmi-narasimha-vadla/" target="_blank" className="social-icon-btn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Narasimhavadla" target="_blank" className="social-icon-btn">
                <Github size={18} />
              </a>
              <a href="https://www.instagram.com/mister_kishore8/" target="_blank" className="social-icon-btn">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          <div className="contact-form-card glass-card">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="0eed06dc-b5d3-4c63-a78e-5f13681bac31" />
              
              {formStatus === 'success' && (
                <div className="submit-alert success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="submit-alert error">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    required 
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your email" 
                    required 
                    disabled={formStatus === 'submitting'}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea 
                  name="message" 
                  className="form-input" 
                  placeholder="Tell me about your project..." 
                  required 
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-luxury btn-luxury-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending Message...' : 'Send Message'} 
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="luxury-container footer-wrapper">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Lakshmi Narasimha Vadla. All rights reserved.
          </p>
          <a href="#" className="back-to-top">
            Back to Top <ChevronUp size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
