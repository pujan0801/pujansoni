import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineGoogle
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {BiPhoneCall} from "react-icons/bi";
import {CgMail} from "react-icons/cg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              An enthusiastic candidate who has considerable experience in the field of Computer Sciences along with the present day concept of IoT and AI-ML. Assisting my current educational institute in developing new projects using breakthrough technologies like ML-AI and IoT, taking into consideration the ventures as new business models for the upcoming era. Furthermore, I have taken several courses related to software and web development and used the same in various projects.️
              <br />
              <br/> <br/> <br/>
              &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              <span style={{fontSize:"2em"}}>Feel free to </span><span className="purple" style={{fontSize:"2em"}}>connect </span><span style={{fontSize:"2em"}}>with me</span>
            </p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pujansoni/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
              <a
                  href="https://scholar.google.com/citations?user=nddF1YsAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
              >
                <AiOutlineGoogle />
              </a>
            </li>

              <li className="social-icons">
                <a
                    href="tel://+91-9427829482"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <BiPhoneCall />
                </a>
              </li>

              <li className="social-icons">
                <a
                    href="mailto:poojansoni57@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <CgMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                    href="https://github.com/pujan2308"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                    href="https://www.instagram.com/poojan.2308/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
