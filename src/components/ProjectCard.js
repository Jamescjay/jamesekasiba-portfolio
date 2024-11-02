import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  liveDemoLink,
  githubLink,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-image" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-buttons">
            <a
              href={liveDemoLink}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a
              href={githubLink}
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
