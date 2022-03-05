import React, { useState } from "react";
import Navbar from "./navbar";
import Resume from "./Resume";
import About from "./About";
import WorkSamples from "./WorkSamples";
import Contact from "./Contact";
import linkedInlogo from "../../src/linkedIn-logo.png";
import githublogo from "../../src/GitHub-Mark.png";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "WorkSamples":
        return <WorkSamples />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="root">
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <footer className="footer">
          <ul className="footer-ul">
            <li className="githubLink">
              <a href="https://github.com/chrismuto">
              <img src={githublogo} alt="github profile"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chris-muto-8453469/">
              <img src={linkedInlogo} alt="linkedIn profile"/>
              </a>
            </li>
          </ul>
      </footer>
    </div>
  );
};

export default Portfolio;
