import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Container/Navbar/NavigationBar";
import Profile from "./Container/Home/Profile";
import Project from "./Container/Project/Project";
import Footer from "./Container/Footer/Footer";
import {Routes, Route} from "react-router-dom";
import Education from "./Container/Skills/Education";
import Skills from "./Container/About(Edu)/Skills";

function App() {
  return <div className="App">
    <NavigationBar />
    <Routes>
      {/* <Route path="/" element={<NavigationBar />}></Route> */}
          <Route path='/' element={<Profile />}></Route>
          <Route path="/about" element={<Education />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
    </Routes>
  </div>;
}

export default App;
