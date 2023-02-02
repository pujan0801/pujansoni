import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiApple,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiCanva,
  SiAcer
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Apple</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Photoshop</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">AfterEffects</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Canva</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAcer />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Acer</div>
              </div>
          </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
