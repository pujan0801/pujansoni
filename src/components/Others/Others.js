import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import certi from "../../Assets/certi.png"
import Certificates from "./Certificates";
import Photography from "./Photography";
import photo1 from "../../Assets/photo1.png";
import photo2 from "../../Assets/photo2.png";
import photo3 from "../../Assets/photo3.png";
import photo4 from "../../Assets/photo4.png";
import photo5 from "../../Assets/photo5.png";
import photo6 from "../../Assets/photo6.png";
import button from "bootstrap/js/src/button";
import Toolstack from "../About/Toolstack";
import {CgFileDocument} from "react-icons/cg";
import Button from "react-bootstrap/Button";


function Others() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="purple" style={{fontSize:"35px"}}>Certificates</strong> <strong style={{fontSize:"35px"}}>I have</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are my certificates.
                </p>
                <Row style={{ justifyContent: "center", padding: "5px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "30px",
                        }}
                    >
                        <Certificates />
                    </Col>

                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={certi} alt="certi" className="img-fluid" style={{paddingBlock:"60px"}}/>
                    </Col>
                </Row>
            </Container>


            <Container>
                <h1 className="project-heading">
                    <strong style={{fontSize:"35px"}}> My</strong><strong className="purple" style={{fontSize:"35px"}}> Photography</strong><strong style={{fontSize:"35px"}}> Portfolio</strong>
                </h1>
                <p style={{ color: "white" }}>
                   Here are some of the shots taken by me.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <Photography
                            imgPath={photo1}
                            isBlog={false}
                            title="Logos"
                            ghLink="https://drive.google.com/drive/folders/1hOTwiIY9tBpJsQfTeCYhkE9y33ptBYfE?usp=share_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Photography
                            imgPath={photo2}
                            isBlog={false}
                            title="Model Shoot"
                            ghLink="https://drive.google.com/drive/folders/1Lnp-ff1wUkNLD5bCpqbB1TRhyZtccbZS?usp=share_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Photography
                            imgPath={photo3}
                            isBlog={false}
                            title="Portraits"
                            ghLink="https://drive.google.com/drive/folders/1x5P4dWBf_KnvYBtPZ5rTye0nZDtNALfl?usp=share_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Photography
                            imgPath={photo4}
                            isBlog={false}
                            title="Promotional Banners"
                            ghLink="https://drive.google.com/drive/folders/1cWVFYnn3Gyv3OySfft5lNEha4EZgHkFK?usp=share_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Photography
                            imgPath={photo5}
                            isBlog={false}
                            title="Promo Posts/Videos"
                            ghLink="https://drive.google.com/drive/folders/1ezYy55VfLPhgcEyF_OgLUk6_A6htGrf2?usp=share_link"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Photography
                            imgPath={photo6}
                            isBlog={false}
                            title="Videos"
                            ghLink="https://drive.google.com/drive/folders/1aAmG-d-0nAnwM8rdVlU5Ripnciscs7oK?usp=share_link"
                        />
                    </Col>
                    <h1 className="project-heading" >
                        <strong style={{fontSize:"35px"}}>My</strong> <strong className="purple" style={{fontSize:"35px"}}>Tools </strong>
                    </h1>Tools I use
                    <Toolstack/>

                </Row>
                <Button
                    href="https://drive.google.com/file/d/1KIBEq_vkvMBBR1xYqdt20S7Wc_mU4yCV/view?usp=share_link"
                    target="_blank"
                    className="fork-btn-inner"
                >
                    <CgFileDocument style={{ fontSize: "1.1em" }} /> Photography CV
                </Button>
            </Container>
        </Container>
    );
}

export default Others;
