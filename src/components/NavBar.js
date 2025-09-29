import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/Orion_github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { Sun, Moon } from 'lucide-react';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    if (savedDarkMode) {
      const darkModeValue = JSON.parse(savedDarkMode);
      setIsDarkMode(darkModeValue);
    }
  }, []);

  // Apply dark mode styles to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.background = '#121212';
      document.body.style.color = 'white';
      document.body.classList.add('dark-mode');
    } else {
      document.body.style.background = 'linear-gradient(135deg, #dcebf0 0%, #b8d4e3 30%, #94bed6 70%, #70a8c9 100%)';
      document.body.style.color = '';
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save to localStorage
    localStorage.setItem('isDarkMode', JSON.stringify(newDarkMode));
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={`${scrolled ? "scrolled" : ""} ${isDarkMode ? "dark-mode" : ""}`}
        style={{
          background: isDarkMode ? '#121212' : 'linear-gradient(135deg, #dcebf0 0%, #b8d4e3 30%, #94bed6 70%, #70a8c9 100%)',
          borderBottom: isDarkMode 
            ? '1px solid rgba(255, 255, 255, 0.1)' 
            : '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#services"
                className={
                  activeLink === "services"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("services")}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/james-ekasiba-a0a99b23b">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/Jamescjay">
                  <img src={navIcon2} alt="" />
                </a>
              </div>
                <button 
                  onClick={toggleDarkMode}
                  className={isDarkMode ? "dark-mode-toggle" : "light-mode-toggle"}
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};