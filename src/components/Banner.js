import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/img/james.png";
import { 
  ArrowRightCircle, 
  Download, 
  Github, 
  Linkedin, 
  Code, 
  Award,
  Star
} from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  // State management with proper TypeScript-like patterns
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isAnimating, setIsAnimating] = useState(true);

  // Professional role rotations - more diverse and impressive
  const toRotate = useMemo(() => [
    "Full-Stack Engineer",
    "System Architect", 
    "UI/UX designer",
    "API Specialist",
    "Performance Engineer"
  ], []);

  const period = 2000;

  // Professional stats to showcase experience
  const stats = useMemo(() => [
    { icon: <Code size={20} />, value: "8+", label: "Projects Delivered" },
    { icon: <Award size={20} />, value: "35%", label: "Performance Boost" },
    { icon: <Star size={20} />, value: "100%", label: "Client Satisfaction" }
  ], []);

  // Optimized typing animation with useCallback for performance
  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, toRotate, period]);

  useEffect(() => {
    if (!isAnimating) return;
    
    const ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [tick, delta, isAnimating]);

  // Professional resume download handler
  const handleDownloadResume = useCallback(() => {
    // Create a more professional download experience
    const link = document.createElement('a');
    
    // Try different paths based on your setup:
    // Option 1: Direct public folder access (most common)
    link.href = '/assets/resume/James-Ekasiba-Resume.pdf';
    
    // Option 2: If above doesn't work, try without leading slash
    // link.href = 'assets/resume/James-Ekasiba-Resume.pdf';
    
    // Option 3: If using React Router basename or subdirectory
    // link.href = `${process.env.PUBLIC_URL}/assets/resume/James-Ekasiba-Resume.pdf`;
    
    link.download = 'James_Ekasiba_Software_Engineer_Resume.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Add error handling
    link.onerror = () => {
      console.error('Resume file not found. Please check the file path.');
      alert('Resume file not found. Please contact for a copy.');
    };
    
    // Add analytics tracking (professional touch)
    if (window.gtag) {
      window.gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'banner_download'
      });
    }
    
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show success notification
    console.log('Resume download initiated');
  }, []);

  // Professional social links
  const socialLinks = useMemo(() => [
    { 
      icon: <Github size={24} />, 
      href: "https://github.com/Jamescjay", 
      label: "GitHub",
      color: "#333"
    },
    { 
      icon: <Linkedin size={24} />, 
      href: "https://www.linkedin.com/in/james-ekasiba-a0a99b23b", 
      label: "LinkedIn",
      color: "#0077b5"
    }
  ], []);

  return (
    <Router>
      <section className="banner" id="home">
        {/* Enhanced Background Elements */}
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
        <div className="floating-elements">
          <div className="float-element float-1"></div>
          <div className="float-element float-2"></div>
          <div className="float-element float-3"></div>
          <div className="float-element float-4"></div>
        </div>
        
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col xs={12} md={6} xl={7} className="content-col">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`banner-content ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                    {/* Professional Badge */}
              

                    {/* Enhanced Heading */}
                    <h1 className="banner-title">
                      <span className="greeting">Hello, I'm</span>
                      <span className="name">James Ekasiba</span>
                      <span className="role-container">
                        <span className="txt-rotate" data-period="1000">
                          <span className="wrap">{text}</span>
                        </span>
                      </span>
                    </h1>

                    {/* Professional Description */}
                    <div className="description-container">
                      <p className="main-description">
                      I’m a Full-Stack Developer with a passion for building scalable, user-friendly applications from the ground up. Over the years, I’ve worked with cross-functional teams, architected secure and high-performance backend systems, and delivered responsive front-end experiences that people actually enjoy using.

                      I thrive on turning complex requirements into simple, elegant solutions and I enjoy mentoring other developers along the way. Whether it’s designing APIs, improving infrastructure, or refining UX, I focus on reliability, performance, and maintainability to ensure the products I build create real impact for businesses and users alike.
                        </p>
                      
                      {/* Achievement Stats */}
                      <div className="stats-container">
                        {stats.map((stat, index) => (
                          <div key={index} className="stat-item">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-content">
                              <div className="stat-value">{stat.value}</div>
                              <div className="stat-label">{stat.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="action-buttons">
                      <HashLink to="#connect" className="btn-primary-action">
                        <span>Let's Connect</span>
                        <ArrowRightCircle size={20} />
                        <div className="btn-shimmer"></div>
                      </HashLink>
                      
                      <button 
                        className="btn-secondary-action"
                        onClick={handleDownloadResume}
                        aria-label="Download Resume"
                      >
                        <Download size={20} />
                        <span>Download CV</span>
                        <div className="btn-ripple"></div>
                      </button>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                      <span className="social-label">Connect with me:</span>
                      <div className="social-icons">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label={social.label}
                            style={{ '--social-color': social.color }}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            
            <Col xs={12} md={6} xl={5} className="visual-col">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`visual-container ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>
                    {/* Enhanced 3D Visual Elements */}
                    <div className="visual-scene">
                      {/* Orbiting Elements */}
                      <div className="orbit-container">
                        <div className="orbit orbit-1">
                          <div className="orbit-element tech-1"></div>
                        </div>
                        <div className="orbit orbit-2">
                          <div className="orbit-element tech-2"></div>
                        </div>
                        <div className="orbit orbit-3">
                          <div className="orbit-element tech-3"></div>
                        </div>
                      </div>
                      
                      {/* Main Tech Illustration */}
                      <div className="tech-illustration">
                        <div className="tech-glow"></div>
                      </div>
                      
                      {/* Professional Profile */}
                      <div className="profile-showcase">
                        <div className="profile-frame">
                          <img 
                            src={profileImg} 
                            alt="James Ekasiba - Senior Software Engineer" 
                            className="profile-image"
                          />
                          <div className="profile-ring"></div>
                          <div className="profile-glow"></div>
                        </div>
                        
                        {/* Status Indicator */}
                        <div className="status-indicator">
                          <div className="status-dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};