import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Certificates() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <ul>
                        <li className="about-activity">
                            <ImPointRight />  <strong style={{fontSize:"28px"}} className="purple">Technical</strong><strong style={{fontSize:"28px"}}> Events </strong>
                            <div>
                                <br/>
                                <a href="https://drive.google.com/drive/folders/15piP_vFUri9L13MZiIquMDr53hP41vQ_?usp=share_link" target="_blank">
                                    <button className="btn-primary">Certifications</button>
                                </a>
                            </div>
                        </li><br/>

                        <li className="about-activity">
                            <ImPointRight /> <strong style={{fontSize:"28px"}} className="purple">Internships</strong>
                            <div>
                                <br/>
                                <a href="https://drive.google.com/drive/folders/1bq0fUjjEMwsiKJgH_CHLCQPYC2gAvqOw?usp=share_link" target="_blank">
                                    <button className="btn-primary">Certifications</button>
                                </a>
                            </div>
                        </li><br/>

                        <li className="about-activity">
                            <ImPointRight /> <strong style={{fontSize:"28px"}} className="purple">G-</strong><strong style={{fontSize:"28px"}}>Suite </strong>
                            <div>
                                <br/>
                                <a href="https://drive.google.com/drive/folders/12RNsMBDBMCcILf7Hb0hiamKrECGDTE1U?usp=share_link" target="_blank">
                                    <button className="btn-primary">Certifications</button>
                                </a>
                            </div>
                        </li><br/>

                        <li className="about-activity">
                            <ImPointRight /> <strong style={{fontSize:"28px"}} className="purple">Extra</strong><strong style={{fontSize:"28px"}}> Curricular </strong>
                            <div>
                                <br/>
                                <a href="https://drive.google.com/drive/folders/1UOABLMPVxhwLsNl_iS6_3ziHB3fzl8y7?usp=share_link" target="_blank">
                                    <button className="btn-primary">Certifications</button>
                                </a>
                            </div>
                        </li><br/>

                        <li className="about-activity">
                            <ImPointRight /> <strong style={{fontSize:"28px"}}>Winners</strong><strong style={{fontSize:"28px"}}> <strong style={{fontSize:"28px"}} className="purple">&</strong> Awards </strong>
                            <div>
                                <br/>
                                <a href="https://drive.google.com/drive/folders/1VO5FFKsqlWlE7B6LpZqZTQXncBRHECRN?usp=share_link" target="_blank">
                                    <button className="btn-primary">Certifications</button>
                                </a>
                            </div>
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Certificates;
