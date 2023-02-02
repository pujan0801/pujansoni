import React, {useLayoutEffect} from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function EduCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>GSFC University</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em"}}> August 2019 - present </b>
                        </i>
                    </p>
                        <li className="about-activity" style={{fontSize: "0.8em"}}>
                            <ImPointRight /> Cumulative Grade Point Average: 7.5
                        </li>
                        <li className="about-activity" style={{fontSize: "0.8em"}}>
                            <ImPointRight /> Student Coordinator–Code ClubMember, GSFC University Innovation & Incubation Center for Applied Research (GUIITAR)
                        </li>
                        <li className="about-activity" style={{fontSize: "0.8em"}}>
                            <ImPointRight /> Committee Member – TechNext (February 2020 – March 2020)
                        </li> <br/>
                    <p style={{textAlign:("left")}}>
                    <span className="purple" style={{fontSize: "1.4em"}}>Edu-Nova Higher Secondary School</span> <br/>
                    <i>
                        <b style={{fontSize: "0.8em"}}> April 2016 - March 2019 </b>
                    </i>
                        </p>
                <li className="about-activity" style={{fontSize: "0.8em"}}>
                    <ImPointRight /> Acquired the seat in JEE Quota after successfully clearing the  competitive exam-JEE Mains 2019.
                    </li> <br/>
                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>Bright Day School</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em"}}> April 2006 - April 2016 </b>
                        </i>
                    </p>
                    <li className="about-activity" style={{fontSize: "0.8em"}}>
                        <ImPointRight /> Studied throughout in Central Board with various in-house activities.
                    </li>



                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default EduCard;
