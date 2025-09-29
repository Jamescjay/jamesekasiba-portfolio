import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skillsData = [
    { img: meter1, name: "Web Development", level: "expert" },
    { img: meter1, name: "Backend Development", level: "expert" },
    { img: meter1, name: "React", level: "expert" },
    { img: meter1, name: "Python", level: "expert" },
    { img: meter3, name: "JavaScript", level: "advanced" },
    { img: meter3, name: "Node.js", level: "advanced" },
    { img: meter3, name: "TypeScript", level: "advanced" },
    { img: meter1, name: "Flask", level: "expert" },
    { img: meter2, name: "Django", level: "proficient" },
    { img: meter2, name: "FastAPI", level: "proficient" },
    { img: meter3, name: "SQL", level: "advanced" },
    { img: meter3, name: "MongoDB", level: "advanced" },
    { img: meter3, name: "PostgreSQL", level: "advanced" },
    { img: meter1, name: "Git & GitHub", level: "expert" },
    { img: meter3, name: "CI/CD", level: "advanced" },
    { img: meter3, name: "Docker", level: "advanced" },
    { img: meter2, name: "AWS", level: "proficient" },
    { img: meter1, name: "REST API", level: "expert" },
    { img: meter2, name: "GraphQL", level: "proficient" },
    { img: meter1, name: "Figma", level: "expert" },
    { img: meter3, name: "Tailwind CSS", level: "advanced" },
    { img: meter2, name: "Redux", level: "proficient" },
    { img: meter3, name: "Next.js", level: "advanced" },
    { img: meter2, name: "Express.js", level: "proficient" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <div className="skill-header">
                <h2>Skills & Expertise</h2>
                <p>
                  With years of experience in full-stack software development,
                  I have mastered a diverse range of technologies across both 
                  front-end and back-end ecosystems.
                </p>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="skill-carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding"
                className="skill-slider"
              >
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <div className="skill-card">
                      <div className="skill-icon">
                        <img src={skill.img} alt={skill.name} />
                      </div>
                      <h5>{skill.name}</h5>
                      <span className={`skill-level ${skill.level}`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};