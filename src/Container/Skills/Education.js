import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Education = () => {
  return (
    <div className="main">
      <h1 className="text-center background"> Education</h1>
      <div className="bg">
        <Container>
          <Row>
            <Col className="r1">
              {" "}
              <Card style={{ border: "none" }} className="bg1">
                <Card.Body>
                  <ul>
                    <li>
                      <p> Gujarat Technological University</p>
                    </li>
                    <Card.Text>
                      <p className="ml">
                        <b>BE in INFORMATION TECHNOLOGY</b>
                      </p>
                      <p>
                        <b> C.G.P.A - 8.22</b>
                      </p>
                      <p>
                        Sarvajanik College of Engineering and Technology | surat
                      </p>
                      <br></br>
                      <p className="certi">
                        {" "}
                        <h5>Certificates</h5>
                      </p>
                      <ul>
                        <li>
                          <p>
                            {" "}
                            30 Days of Google Cloud Program By Google Cloud
                            Platform
                          </p>
                        </li>
                        <li>
                          <p>Web Development Course By Yhills Edutech</p>
                        </li>
                        <li>
                          <p>Volunteer In TechFest(State Leval)</p>
                        </li>
                      </ul>
                    </Card.Text>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col className="r1">
              {" "}
              <Card style={{ border: "none" }} className="bg1">
                <Card.Body>
                  <Card.Text>
                    <ul>
                      <li>
                        <p>
                          Gujarat Secoundary And Higher Secoundary Education
                          Board
                        </p>
                      </li>
                      <p>
                        <b>
                          <p>HSC - 87%</p>
                        </b>
                        <p>Akshar Jyoti Highschool</p>
                      </p>
                      <br></br>
                      <li>
                        <p>Gujarat Secoundary Education Board</p>
                      </li>
                      <p>
                        <b>SSC - 93% </b>
                      </p>
                      <p> Yogi Pravruti Vidhayalaya</p>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <h1 className="text-center background"> Interest</h1>
      <div className="bg2">
        <Container>
          <Row>
            <Col>
              <ul>
                <li>
                  <p className="mb">Web Designing</p>
                </li>
                <li>
                  <p className="mb">Management</p>
                </li>
              </ul>
            </Col>

            <Col>
              <ul>
                <li>
                  <p className="mb">Android Application</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Education;
