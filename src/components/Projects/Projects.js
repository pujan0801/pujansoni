import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import airospy from "../../Assets/Projects/airospy.png"
import micromouse from "../../Assets/Projects/micro.png"
import face from "../../Assets/Projects/face.png"
import sentiment from "../../Assets/Projects/sentiment.png"
import vehicle from "../../Assets/Projects/vehicle.png"
import cognitive from "../../Assets/Publications/cognitive.png"
import digit from "../../Assets/Projects/digit.png"
import skin from "../../Assets/Projects/skin.png"
import summary from "../../Assets/Projects/summary.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airospy}
              isBlog={false}
              title="Air-o-Spy"
              Subtitle={"September 2019 - November 2019"}
              description="This project displays the Air and Noise quality levels around you and provides you solutions as well as cures to those problems. Surveyed the vicinity of GSFC University, Vadodara and developed an innovative IoT based
solution to monitor the Air quality as well as Sound quality levels remotely. Results were authenticated by the GSFC Ltd, Safety and Health Department. Plotted a variety of real time graphs and histograms to visualize the data and provided
solutions for the problems accordingly in the mobile application."
              ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={micromouse}
              isBlog={false}
              title="Micro-Mouse"
              Subtitle={"November 2019 - January 2020"}
              description="Build a Micro-Mouse robot which is programmed in such a way that when placed at one end
of a maze, it starts analyzing its way to the center of the maze where the finish line lies. Participated in the International Micromouse Competition held at Techfest 2020, IIT Bombay
and secured a fifth position."
              ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Online Attendance System using Face recognition"
              Subtitle={"December 2019 - January 2020"}
              description="Build an Online attendance system for our university using yolov3 algorithm and OpenCV library for face recognition. Students would have to register their face data once, and from then during the attendance
the student has to turn on the device’s camera and record the attendance. Once recorded, the data will be stored in a CSV file. This system is also applicable to recordings of lectures."
              ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis for Twitter"
              Subtitle={"April 2020 - May 2020"}
              description="Created a sentiment analysis tool using python language and Machine Learning techniques for the Twitter in order to categorize the input data of the users."
              ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vehicle}
              isBlog={false}
              title="Vehicle details fetching system using Machine Learning"
              Subtitle={"January 2021 - February 2021"}
              description="Online system which can fetch details of a vehicle from the video file of CCTV camera of any freeway using yolov5 and DeepSORT. Details like Vehicle license plate, vehicle speed and lane identity can be tracked using the system."
              ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cognitive}
              isBlog={false}
              title="Cognitive-Chair: AI based advanced Brain Sensing Wheelchair for Paraplegic/Quadriplegic people"
              Subtitle={"November 2021 - present"}
              description="Cognitive Chair is a smart AI based Voice as well as Brain controlled wheelchair. Which uses EEG and EOG technologies to control the wheelchair. Brain Computer Interface is also used to link the EEG/EOG headband with the microcontroller. Our team has received grants of Rs. 70,000/- from GSFC University and Gujarat Government under SSIP for Prototype development."
              ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={digit}
                isBlog={false}
                title="Comparative research of different techniques for Handwritten Digit recognition"
                Subtitle={"February 2022 - July 2022"}
                description="Created Handwritten digit recognition system using ANN. Also tried different techniques like Dimensionality reduction, Principal Component Analysis, SVD, and Autoencoders. Compared the results from all the techniques and provided a heatmap for better representation."
                ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={skin}
                isBlog={false}
                title="Melanoma and Skin Lesions detection"
                Subtitle={"September 2022 - November 2022"}
                description="Build a classification model which can take images as an input and provide the results whether the person is suffering from Melanoma or not We used CNN for predicting melanoma from the images. We also used SVM for comparison
purposes but CNN outperformed it by getting 91% accuracy."
                ghLink="https://github.com/pujan2308"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={summary}
                isBlog={false}
                title="Guardian News Articles Summarization"
                Subtitle={"September 2022 - December 2022"}
                description="Build a text summarization tool using NLP for summarizing a lengthy document into a short
version. A summary compresses a lengthy document by highlighting salient features. It also helps
reader to get a gist of the article just by reading summary so that the reader can save time
and also can decide whether to go through the entire document. We used the Textrank algorithm for the summarization part. We also used TF-IDF for analysis
purposes and inferred that the Textrank algorithm will give better results than the latter"
                ghLink="https://github.com/pujan2308"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
