import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg nav1 ">
        <div class="container">
          <div class="navbar-brand text-white">
            <img src="Images/Logo.png" alt="" width="80" height="80" /> Divya
            Tank
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 text-white "
                  aria-current="page"
                  to="/"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-white" to="/about">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-white" to="/skills">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-white" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-white" to="/footer">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
