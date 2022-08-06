import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="wrapper">
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-detail">
              <div className="pd">
                <a href="https://github.com/Divya-Tank" className="github cols">
                  <BsGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/divya-tank-108a85220/"
                  className="linkedin cols"
                >
                  <BsLinkedin />
                </a>
              </div>

              <div className="profile-details-name ">
                <span className="primary-text">
                  {" "}
                  Hello, I'M{" "}
                  <span className="highlighted-text"> Divya Tank</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h2 className="text">
                    <span> Web Developer || MERN </span>
                  </h2>
                  <span className="profil-role-tagline">
                    <div className="container">
                      I am a final-year IT Engineering Student. Once I get into
                      something I complete it with full dedication. I am very
                      enthusiastic to learn new things. I am very interested to
                      work in web development with the skill in HTML, CSS, Js,
                      React.Js, and Node.Js. I am also interested in Data
                      Structure and object-oriented programming. I am also intrested in Management.
                    </div>
                  </span>
                </span>
              </div>
              <div className="profile-options">
                <Link to='/footer'>
                <Button variant="warning">
                  {""} Hire Me{""}
                </Button>{" "}</Link>
                <a href="Divya Tank.pdf" download="Divya Tank.pdf">
                  <Button variant="outline-warning">
                    {""} Get Resume{""}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
