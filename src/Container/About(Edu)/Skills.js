import React from "react";
import "./AboutMe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <>
      <h3 className="text-center"> Skills</h3>
      <div className="bg">
        <Container>
          <Row className="tab-content active-tab">
            <Col className="cols">
              <img src="Images/mongo.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/ExpressJs.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/react.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/node.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/html.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/css.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/js.png" alt="" />
            </Col>

            <Col className="cols">
              <img src="Images/jquery.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/Angular.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/bootstrap.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/c.png" alt="" />
            </Col>
            <Col className="cols">
              <img src="Images/java.png" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Skills;
