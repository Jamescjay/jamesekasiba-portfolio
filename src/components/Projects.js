import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/moonlight.PNG";
import projImg2 from "../assets/img/Mill.PNG";
import projImg3 from "../assets/img/nob.PNG";
import projImg4 from "../assets/img/calculator.PNG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Moonlight School",
      description: "School website",
      imgUrl: projImg1,
      liveDemoLink: "https://moonlight-frontend.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Moonlight-frontend",
    },
    {
      title: "Mill",
      description: "E-commerce website",
      imgUrl: projImg2,
      liveDemoLink: "https://e-commerce-frontend-olive-three.vercel.app/",
      githubLink: "https://github.com/Antoine-Nchore/e-commerce-backend",
    },
    {
      title: "Nobility Hub",
      description: "E-learning Website",
      imgUrl: projImg3,
      liveDemoLink: "https://nobility-hub-client.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Nobility-hub-backend",
    },
    {
      title: "Advanced Calculator",
      description: "calculator",
      imgUrl: projImg4,
      liveDemoLink: "https://jamescjay.github.io/Advanced-Calculator/",
      githubLink: "https://github.com/Jamescjay/Advanced-Calculator",
    },
  ];

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    I’ve developed a range of full-stack projects that highlight
                    my skills in building responsive, high-performance
                    applications.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="project-box">
                          <h2>Descriptions</h2>
                          <h3>Mill</h3>
                          <p>
                            Mill is a full-stack e-commerce application built
                            with Flask and React.js, designed to provide a
                            seamless shopping experience. It features user
                            authentication, product listings, a shopping cart,
                            and a checkout process that integrates payment
                            gateways.
                          </p>

                          <h3>Moonlight School</h3>
                          <p>
                            Moonlight School is an online learning platform that
                            connects students with educators. Developed using
                            React for the frontend and FastAPI for the backend,
                            it allows users to enroll in courses, track
                            progress, and receive feedback from instructors.
                          </p>

                          <h3>Nobility Hub</h3>
                          <p>
                            Nobility Hub is a dynamic online learning platform
                            that leverages Flask for server-side management and
                            PostgreSQL for database management. The platform
                            enhances the learning experience through interactive
                            features, user profiles, and a comprehensive course
                            catalog.
                          </p>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="project-box">
                          <h2 className="text-2xl font-bold text-white mb-4">
                            Overview
                          </h2>
                          <p className="text-white mb-4">
                            I have had the opportunity to work on a variety of
                            projects that showcase my skills in web development
                            and design. Each project is crafted with a focus on
                            user experience and problem-solving, utilizing a
                            blend of technologies and design tools.
                          </p>
                          <p className="text-white mt-4">
                            In addition to coding, I leverage tools such as{" "}
                            <strong>Tailwind CSS</strong>,{" "}
                            <strong>Bootstrap</strong>, and{" "}
                            <strong>Chakra UI</strong> for designing responsive
                            and visually appealing interfaces. My design process
                            is supported by <strong>Figma</strong> for
                            wireframing and prototyping, while{" "}
                            <strong>Blender</strong> and <strong>Adobe</strong>{" "}
                            products are utilized for creating stunning graphics
                            and animations.
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
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
