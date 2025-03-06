import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/moonlight.PNG";
import projImg2 from "../assets/img/Mill.PNG";
import projImg3 from "../assets/img/nob.PNG";
import projImg4 from "../assets/img/transcripto.PNG";
import projImg5 from "../assets/img/trivia.PNG";
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
      title: "Trivia Master",
      description: "Trivia game",
      imgUrl: projImg5,
      liveDemoLink: "https://trivia-master-eight.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Trivia-Master",
    },
    {
      title: "Transcripto",
      description: "Transcribe & Translate",
      imgUrl: projImg4,
      liveDemoLink: "https://transcripto.vercel.app/",
      githubLink: "https://github.com/Jamescjay/Transcripto",
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
                        <h2>Descriptions</h2>
                        <div className="project-box">
                          <h3>Trivia Master</h3>
                          <p>
                            Trivia Master is an engaging trivia game that
                            challenges players' knowledge across various topics
                            through a dynamic and interactive interface. It
                            provides instant feedback on answers, enhancing the
                            learning and entertainment value of the game.
                            Featuring vibrant graphics, animations, and sound
                            effects, the game creates an immersive experience
                            for users. Optimized for mobile devices, it ensures
                            seamless performance and accessibility, making it an
                            enjoyable tool for testing and expanding trivia
                            skills. The addition of timed rounds, score
                            tracking, and responsive design has elevated the
                            game to a favorite among players seeking both
                            education and fun.
                          </p>
                        </div>
                        <div className="project-box">
                          <h3>Mill</h3>
                          <p>
                            Mill is a full-stack e-commerce application built
                            using Flask and React.js to deliver a smooth and
                            efficient shopping experience. The platform
                            incorporates essential features like user
                            authentication, detailed product listings, a fully
                            functional shopping cart, and a secure checkout
                            process integrated with payment gateways. Designed
                            for scalability, Mill can handle significant user
                            traffic while maintaining performance. Businesses
                            benefit from the ability to showcase and sell
                            products, while customers enjoy personalized
                            recommendations and seamless navigation, resulting
                            in a 20% increase in user engagement.
                          </p>
                        </div>
                        <div className="project-box">
                          <h3>Moonlight School</h3>
                          <p>
                            Moonlight School is an interactive online learning
                            platform designed to connect students with
                            educators. The platform features a responsive user
                            interface developed using React, ensuring seamless
                            navigation and enhanced user engagement. Its
                            scalable backend, built with Node.js, provides
                            efficient data handling and robust API management.
                            Additionally, the platform's performance was
                            optimized by refining the course recommendation
                            algorithm and reducing load times by 20%, which
                            significantly improved user retention and
                            satisfaction.
                          </p>
                        </div>
                        <div className="project-box">
                          <h3>Transcripto</h3>
                          <p>
                            Transcripto is an advanced AI-powered transcription
                            and translation platform designed to convert audio
                            files into accurate text effortlessly. Built with
                            React.js and flask, it offers a seamless user
                            experience with a clean and modern interface. Users
                            can upload audio files, and the system efficiently
                            transcribes them while providing real-time visual
                            feedback with animated bars. Additionally,
                            Transcripto supports multiple languages, enabling
                            both transcription and translation within a single
                            workflow. Designed for speed and accuracy, it
                            leverages cutting-edge NLP models to deliver
                            high-quality results. Ideal for professionals,
                            students, and content creators, Transcripto enhances
                            productivity by streamlining the transcription
                            process, reducing manual effort, and improving
                            accessibility.
                          </p>
                        </div>
                        <div className="project-box">
                          <h3>Nobility Hub</h3>
                          <p>
                            Nobility Hub is a comprehensive online learning
                            platform leveraging Flask for backend management and
                            PostgreSQL for robust database operations. The
                            platform offers an extensive course catalog,
                            interactive user profiles, and features like
                            assignment tracking and peer-to-peer communication.
                            Real-time notifications and gamified elements, such
                            as badges and progress trackers, have significantly
                            improved user engagement and learning outcomes. With
                            a modular and scalable architecture, Nobility Hub
                            ensures a reliable and efficient experience, capable
                            of supporting a growing user base with 98% uptime.
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
