import React from "react";
import { Col, Row } from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
    SiPytorch,
    SiFirebase,
    SiArduino,
    SiAndroidstudio,
    SiMysql,
    SiFlutter,
    SiMicrosoftoffice,
    SiPandas,
    SiNumpy,
    SiDjango,
    SiTensorflow, SiOpencv
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">C++</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">JavaScript</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">NodeJs</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">ReactJs</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Arduino</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Github</div>
              </div>
          </div>
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiMysql />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">MySQL</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">MongoDB</div>
                </div>
            </div>
        </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Firebase</div>
              </div>
          </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
          <div className="images">
          <div className="middle">
              <div className="tech-icons-text">Python</div>
          </div>
      </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
          <SiAndroidstudio />
          <div className="images">
              <div className="middle">
                  <div className="tech-icons-text">Android</div>
              </div>
          </div>
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiFlutter />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">Flutter</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftoffice />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">MSOffice</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPandas />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">Pandas</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPytorch />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">Pytorch</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiNumpy />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">Numpy</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiDjango />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">Django</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiTensorflow />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">Tensorflow</div>
                </div>
            </div>
        </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiOpencv />
            <div className="images">
                <div className="middle">
                    <div className="tech-icons-text">OpenCV</div>
                </div>
            </div>
        </Col>

    </Row>
  );
}

export default Techstack;
