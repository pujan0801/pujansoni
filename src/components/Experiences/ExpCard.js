import React, {useLayoutEffect} from "react";
import Card from "react-bootstrap/Card";

function ExpCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>Experts Hub, Bangalore, Karnataka</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em", color: "#E5A5FC"}}> Intern </b> <br/>
                            <b style={{fontSize: "0.8em"}}> June 2019 - July 2019 </b>
                        </i>
                    </p>
                    <li className="about-activity" style={{fontSize: "0.8em"}}>
                        There was an 8 days long internship program on <span style={{color: "#E5A5FC"}}>Machine Learning and Artificial Intelligence</span> tools and technologies and worked on a real time Machine/Deep learning based project under the aegis of Expertshub Industry.
                        <div>
                            <br/>
                            <a href="https://drive.google.com/file/d/1fRM4-swrq-bZqgEzCxqVsB2nnXQCTTFZ/view?usp=share_link" target="_blank">
                                <button className="btn-primary">Certification</button>
                            </a>
                        </div>

                    </li> <br/>

                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>Experts Hub, Bangalore, Karnataka</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em", color: "#E5A5FC"}}> Intern </b> <br/>
                            <b style={{fontSize: "0.8em"}}> July 2019 - July 2019 </b>
                        </i>
                    </p>
                    <li className="about-activity" style={{fontSize: "0.8em"}}>
                        There was an 8 days long internship program on various <span style={{color: "#E5A5FC"}}>Internet of Things </span> tools and technologies and worked on real time IoT application based projects under the aegis of Expertshub Industry.
                        <div>
                            <br/>
                            <a href="https://drive.google.com/file/d/1FKkg3meBrz_pDcgfDYjqqCe9wSGigrYj/view?usp=share_link" target="_blank">
                                <button className="btn-primary">Certification</button>
                            </a>
                        </div>

                    </li> <br/>

                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>Rainbow Secure, New York, USA</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em", color: "#E5A5FC"}}> Speaker, Volunteer, Moderator </b> <br/>
                            <b style={{fontSize: "0.8em"}}> October 2021 - November 2021 </b>
                        </i>
                    </p>
                    <li className="about-activity" style={{fontSize: "0.8em"}}>
                        I volunteered for the entire Cyber Symposium, which lasted a month. Managed the online crowd in the event and resolved queries and provided support. Provided Expert talk session on topic <span style={{color: "#E5A5FC"}}>Robotic Process Automation using Machine Learning</span>. Moderated minor talk events and interacted with the speakers as well as the audience.
                        <div>
                            <br/>
                            <a href="https://drive.google.com/file/d/199ixAAUJKM8K9X6jMbwIag3UJGC0JwPn/view?usp=share_link" target="_blank">
                                <button className="btn-primary">Certification</button>
                            </a>
                        </div>

                    </li> <br/>

                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>Gurukula, Tntra Ecosystem, Vadodara</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em", color: "#E5A5FC"}}>Full Stack Intern </b> <br/>
                            <b style={{fontSize: "0.8em"}}> June 2022 - July 2022 </b>
                        </i>
                    </p>
                    <li className="about-activity" style={{fontSize: "0.8em"}}>
                        Became proficient on industry level web applications and got acquainted
                        with the process flow of a project in a Service provider organization.
                        Discovered several tools and technologies used in advanced dynamic web
                        applications and completed certain tasks in each of them to acquire skill in the domain.

                        <div>
                            <br/>
                            <a href="https://drive.google.com/file/d/1PEtFadIJLJgAhK3OAHIgDw5-Mhy-RORQ/view?usp=share_link" target="_blank">
                                <button className="btn-primary">Certification</button>
                            </a>
                        </div>

                    </li> <br/>

                    <p style={{textAlign:("left")}}>
                        <span className="purple" style={{fontSize: "1.4em"}}>Gurukula, Tntra Ecosystem, Vadodara</span> <br/>
                        <i>
                            <b style={{fontSize: "0.8em", color: "#E5A5FC"}}>Multi Domain Intern </b> <br/>
                            <b style={{fontSize: "0.8em"}}> September 2022 - present </b>
                        </i>
                    </p>
                    <li className="about-activity" style={{fontSize: "0.8em"}}>
                        Beginning with web development, a project was chosen to work on in a team of three
                        throughout the internship period under the guidance of senior developers. Also
                        Data Science, IoT and Industry Revolution, Internet 4.0, Cyber Security, and
                        Cloud Computing were taught by the respective experts from inside as well as outside
                        the organisation within the Gurukula Ecosystem. Likewise, case studies of flagship
                        projects in each domain were developed.

                    </li>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default ExpCard;
