import React from "react";
import "./Project.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Proj(props) {
  return (
    <>
      <img src={props.image} alt="" className="child"></img>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.detail} </p>
        <a href={props.link}>
          <Button variant="outline-light">Code</Button>{" "}
        </a>
      </div>
    </>
  );
}

const Project = () => {
  return (
    <>
      <h1 className="text-center background"> Project</h1>

      <div className="bg">
        <Container>
          <div className="suggestion">
            <Row className="raw1">
              <Col className="raw">
                <Proj
                  image="Images/Gift.jfif"
                  title="Gift Recommendation"
                  detail="In this project, we recommend a gift based on relationships
                  like father, mother etc., and further categorized it with
                  occasions like Good Luck, Happy Journey, etc."
                  link={"https://github.com/Divya-Tank/Gift-Recommendation"}
                ></Proj>
              </Col>
              <Col className="raw">
                <Proj
                  image="Images/portfolio.png"
                  title="Portfolio"
                  detail="This project is for my practice purpose, In which I use React.js as the main library."
                  link={"https://github.com/Divya-Tank/Portfolio"}
                ></Proj>
              </Col>
            </Row>
            <Row className="raw1">
              <Col className="raw">
                <Proj
                  image="Images/nodeprac.png"
                  title="Node.Js Practice"
                  detail="This is basically for practice purpose of Node.js, Express.js and MongoDB"
                  link={"https://github.com/Divya-Tank/Node.Js-MongoDB"}
                ></Proj>
              </Col>
              <Col className="raw">
                <Proj
                  image="Images/chatapp.jpg"
                  title="Chat Application"
                  detail="I currently working on this ChatApp project to learn and practice more of React.Js"
                  link={""}
                ></Proj>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Project;
