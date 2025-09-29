import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/Orion_github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../App.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content">
          <Col md={6} className="footer-brand">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-tagline">Building digital experiences that matter</p>
          </Col>
          
          <Col md={6} className="footer-social">
            <div className="social-wrapper">
              <span className="social-label">Connect with me</span>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/james-ekasiba-a0a99b23b" className="social-link">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Jamescjay" className="social-link">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="#" className="social-link">
                  <img src={navIcon3} alt="Social" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col className="footer-bottom">
            <div className="footer-divider"></div>
            <p className="copyright">
              © 2023 All Rights Reserved. Crafted with passion.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};