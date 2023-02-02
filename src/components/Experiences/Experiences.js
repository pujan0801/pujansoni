import React, { useState, useEffect } from "react";
import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import expImg from "../../Assets/exp.png";
import ExpCard from "./ExpCard";

function Experiences() {
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
                Work <strong className="purple">Experiences</strong>
              </h1>
              <ExpCard />
            </Col>
            <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
            >
              <img src={expImg} alt="about" className="img-fluid" style={{ maxHeight: "380px" }} />
            </Col>
          </Row>

        </Container>
      </Container>
  );
}
export default Experiences;
