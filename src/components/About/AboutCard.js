import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pujan Soni </span>
            from <span className="purple"> Vadodara, Gujarat, India.</span>
            <br />An accomplished engineer with due experience in cutting edge
            technologies like Computer Engineering Fundamentals, Computational
            Algorithms, Natural Language Processing, Internet-of-Things Devices,
            Data Protection & Security, Software and Hardware Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight href={"../"} /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring different technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pujan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
