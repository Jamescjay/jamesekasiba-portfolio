import React, { useState } from 'react';
import { Container, Row, Col, } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/moonlight.PNG";
import projImg2 from "../assets/img/Mill.PNG";
import projImg3 from "../assets/img/nob.PNG";
import projImg4 from "../assets/img/transcripto.PNG";
import projImg5 from "../assets/img/trivia.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../App.css";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const projects = [
    {
      id: 1,
      title: "Transcripto",
      subtitle: "AI-Powered Transcription & Translation",
      description: "Transcripto is an advanced AI-powered transcription and translation platform designed to convert audio files into accurate text effortlessly. Built with React.js and Django, offering seamless user experience with modern interface.",
      accomplishments: [
        "Integrated cutting-edge NLP models for 95% transcription accuracy",
        "Supports 5 languages for transcription and translation",
        "Real-time visual feedback with animated progress indicators",
        "Enhanced productivity by 60% through streamlined workflow"
      ],
      technologies: ["React.js", "Django", "NLP", "Google Speech Recognition API", "Python", "MySQL"],
      imgUrl: projImg4,
      liveDemoLink: "https://transcripto.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Transcripto",
      featured: false,
      tab: "tab1"
    },
    {
      id: 2,
      title: "Mill",
      subtitle: "Full-Stack E-Commerce Platform",
      description: "Mill is a full-stack e-commerce application built using Flask and React.js to deliver a smooth and efficient shopping experience. Features user authentication, product listings, shopping cart, and secure checkout process.",
      accomplishments: [
        "Integrated secure payment gateways (Mpesa, PayPal)",
        "Built scalable architecture handling 1000+ concurrent users",
        "Implemented personalized product recommendation engine",
        "Achieved 25% increase in user engagement and conversion rates"
      ],
      technologies: ["Flask", "React.js", "PostgreSQL", "Daraja APIs", "Redis"],
      imgUrl: projImg2,
      liveDemoLink: "https://e-commerce-frontend-olive-three.vercel.app/",
      githubLink: "https://github.com/Antoine-Nchore/e-commerce-backend",
      featured: false,
      tab: "tab1"
    },
    {
      id: 3,
      title: "Moonlight School",
      subtitle: "Interactive Online Learning Platform",
      description: "Moonlight School is an interactive online learning platform designed to connect students with educators. The platform features a responsive user interface developed using React, ensuring seamless navigation and enhanced user engagement.",
      accomplishments: [
        "Built scalable backend with Node.js for efficient data handling",
        "Optimized course recommendation algorithm reducing load times by 20%",
        "Implemented responsive design improving user retention and satisfaction",
        "Integrated real-time chat functionality for student-teacher interaction"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "WebSocket"],
      imgUrl: projImg1,
      liveDemoLink: "https://moonlight-frontend.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Moonlight-frontend",
      featured: true,
      tab: "tab2"
    },
    {
      id: 4,
      title: "Trivia Master",
      subtitle: "Engaging Trivia Game Platform",
      description: "Trivia Master is an engaging trivia game that challenges players' knowledge across various topics through a dynamic and interactive interface. It provides instant feedback on answers, enhancing the learning and entertainment value.",
      accomplishments: [
        "Created immersive experience with vibrant graphics and animations",
        "Implemented timed rounds and score tracking system",
        "Optimized for mobile devices with responsive design",
        "Integrated sound effects and visual feedback for enhanced UX"
      ],
      technologies: ["React", "JavaScript", "CSS3", "API Integration", "LocalStorage"],
      imgUrl: projImg5,
      liveDemoLink: "https://trivia-master-eight.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Trivia-Master",
      featured: true,
      tab: "tab2"
    },
    
    {
      id: 5,
      title: "Nobility Hub",
      subtitle: "Comprehensive E-Learning Platform",
      description: "Nobility Hub is a comprehensive online learning platform leveraging Flask for backend management and PostgreSQL for database operations. Features extensive course catalog, interactive user profiles, and gamified learning experience.",
      accomplishments: [
        "Implemented gamified elements with badges and progress tracking",
        "Built real-time notifications and messaging system",
        "Achieved 98% uptime with auto-scaling architecture",
        "Improved learning outcomes by 40% through interactive features"
      ],
      technologies: ["Flask", "PostgreSQL", "WebSocket", "Redis", "Celery"],
      imgUrl: projImg3,
      liveDemoLink: "https://nobility-hub-client.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Nobility-hub-backend",
      featured: true,
      tab: "tab3"
    }
  ];

  // Add a sixth project to have 2 projects per tab
  const allProjects = [
    ...projects,
  ];

  const getFilteredProjects = () => {
    return allProjects.filter(p => p.tab === activeTab);
  };

  return (
    <section className="enhanced-project-section" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="section-header">
                    <h2>Featured Projects</h2>
                    <p>
                      I've developed a range of full-stack projects that highlight
                      my skills in building responsive, high-performance applications
                      with modern technologies and best practices.
                    </p>
                  </div>
                  
                  <div className="custom-nav-pills">
                    <button 
                      className={`nav-button ${activeTab === 'tab1' ? 'active' : ''}`}
                      onClick={() => setActiveTab('tab1')}
                    >
                      Tab 1
                    </button>
                    <button 
                      className={`nav-button ${activeTab === 'tab2' ? 'active' : ''}`}
                      onClick={() => setActiveTab('tab2')}
                    >
                      Tab 2
                    </button>
                    <button 
                      className={`nav-button ${activeTab === 'tab3' ? 'active' : ''}`}
                      onClick={() => setActiveTab('tab3')}
                    >
                      Tab 3
                    </button>
                  </div>
                  
                  <Row className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {getFilteredProjects().map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background decoration"
      />
    </section>
  );
};