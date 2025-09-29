// services.js
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      icon: "🚀",
      description: "End-to-end web application development using modern technologies like React, Node.js, Python, and PostgreSQL. Building scalable, maintainable solutions with clean architecture patterns.",
      skills: ["React/Next.js", "Node.js/Express", "Python/Django/fastApi/flask", "TypeScript"]
    },
    {
      title: "Testing & Debugging",
      icon: "🔧",
      description: "Comprehensive testing strategies including unit, integration, and E2E testing. Expert debugging skills to identify and resolve complex issues efficiently.",
      skills: ["Jest/Vitest", "Cypress/Playwright", "TDD/BDD", "Performance Profiling"]
    },
    {
      title: "Git & Version Control",
      icon: "📚",
      description: "Advanced Git workflows, branching strategies, and collaborative development practices. Code review processes and repository management.",
      skills: ["Git Flow", "Code Reviews", "CI/CD Integration", "Merge Strategies"]
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Creating intuitive, accessible, and visually stunning user interfaces. User research, prototyping, and design system development.",
      skills: ["Figma/Adobe XD", "Design Systems", "Accessibility", "User Research"]
    },
    {
      title: "Containerization",
      icon: "📦",
      description: "Docker containerization, orchestration with Kubernetes, and microservices architecture. Scalable deployment solutions.",
      skills: ["Docker", "Kubernetes", "Docker Compose", "Microservices"]
    },
    {
      title: "SQL & Database Design",
      icon: "🗄️",
      description: "Advanced SQL queries, database optimization, and schema design. Experience with both relational and NoSQL databases.",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Query Optimization"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Professional Services</h2>
          <p className="services-subtitle">Senior-level expertise across the full development lifecycle</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-skills">
                {service.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="service-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;