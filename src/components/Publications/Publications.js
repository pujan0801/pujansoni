import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PublicationCard from "./PublicationCards"
import Particle from "../Particle";
import rnn from "../../Assets/Publications/rnn.png"
import iot from "../../Assets/Publications/iot.png";
import cognitive from "../../Assets/Publications/cognitive.png"

function Publications() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Publications</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are researches and patent I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <PublicationCard
                            imgPath={iot}
                            isBlog={false}
                            title="IoT-Based Unique Air and Noise Pollution Monitoring System"
                            Subtitle={"Research Chapter, 2020"}
                            description="This project displays the Air and Noise quality levels around you and provides you solutions as well as cures to those problems. Surveyed the vicinity of GSFC University, Vadodara and developed an innovative IoT based solution to monitor the Air quality as well as Sound quality levels remotely. Results were authenticated by the GSFC Limited Safety and Health Department. Plotted a variety of real time graphs and histograms to visualize the data and provided solutions for the problems accordingly in the mobile application."
                            ghLink="https://link.springer.com/book/10.1007/978-3-030-71485-7"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <PublicationCard
                            imgPath={cognitive}
                            Subtitle={"Research Paper, 2021-present"}
                            isBlog={false}
                            title="Cognitive-Chair : AI based advanced Brain Sensing Wheelchair for Paraplegic/Quadriplegic people"
                            description="Cognitive Chair is a smart AI based Voice as well as Brain controlled wheelchair. Which uses EEG and EOG technologies to control the wheelchair. Brain Computer Interface is also used to link the EEG/EOG headband with the microcontroller. Our team has received grants of Rs. 70,000/- from GSFC University and Gujarat Government under SSIP for Prototype development. This paper is going to publish in IEEE."
                            ghLink="https://aist2022.com/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <PublicationCard
                            imgPath={rnn}
                            isBlog={false}
                            title="Intelligent Face Recognition System Using Deep Recurrent Neural Network"
                            Subtitle={"Patent, 2022"}
                            description="The intelligent face recognition system using deep recurrent neural network includes a
set of sensors to sense one or more attributes associated with a face of a person, a face image acquisition module operatively coupled to the set of
sensors, for key generation formed of a convolutional neural network (CNN) and a recurrent neural network (RNN) for outputting a consistent key
value by using sample facial images of a person, a database for storing facial record, an individual’s credential to access the database, a storage unit
that facilitates machine-readable medium storing instruction that, when executed by the at least one processing unit, a processing unit configure to
retrieving data from a database and recognize the face, a communication module to communicate data regarding face recognition."
                            ghLink={"https://drive.google.com/file/d/11kNQY4lXuctvzGPJxULnWEo_ecuW3UCV/view?usp=share_link"}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Publications;
