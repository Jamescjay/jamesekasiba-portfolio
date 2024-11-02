// services.js
import React from "react";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>My Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Full Stack Development</h3>
            <p>
              Expertise in both frontend and backend development, ensuring
              seamless integration and performance.
              <br />
              Create tailored web applications that meet specific business
              needs, utilizing technologies like React.js, Python, and
              PostgreSQL.
            </p>
          </div>
          <div className="service-item">
            <h3>Problem Solving</h3>
            <p>
              I collaborate with clients to identify specific challenges and
              develop tailored solutions that leverage technology to overcome
              obstacles, improve efficiency, and achieve business objectives.
            </p>
          </div>
          <div className="service-item">
            <h3>API Development</h3>
            <p>
              Creating and maintaining RESTful APIs for efficient data exchange
              and functionality.
            </p>
          </div>
          <div className="service-item">
            <h3>Performance Optimization</h3>
            <p>
              Analyze and enhance the performance of existing applications by
              optimizing code and database queries.
              <br />
              Implement caching strategies and other techniques to improve load
              times and overall efficiency.
            </p>
          </div>
          <div className="service-item">
            <h3>Database Management</h3>
            <p>
              Expertise in SQL and NoSQL databases, ensuring efficient data
              storage and retrieval.
            </p>
          </div>
          <div className="service-item">
            <h3>Project Management</h3>
            <p>
              Managing software development projects from inception to
              completion, ensuring timely delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
