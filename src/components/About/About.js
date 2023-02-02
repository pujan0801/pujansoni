import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import eduImg from "../../Assets/edu.png";
import EduCard from "./EduCard";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
              <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                  md={7}
                  style={{
                      justifyContent: "center",
                      paddingTop: "30px",
                      paddingBottom: "50px",
                  }}
              >
                  <h1 style={{ fontSize: "2.4em", paddingBottom: "20px" }}>
                      Edu<strong className="purple">cation</strong>
                  </h1>
                    <EduCard />
              </Col>
              <Col
                  md={5}
                  style={{ paddingTop: "100px", paddingBottom: "50px" }}
                  className="about-img"
              >
                  <img src={eduImg} alt="about" className="img-fluid" style={{ maxHeight: "250px" }} />
              </Col>
          </Row>

      </Container>
    </Container>
  );
}

export default About;
