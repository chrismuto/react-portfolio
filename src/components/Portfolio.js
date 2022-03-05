import React, { useState } from "react";
import Navbar from "./navbar";
import Resume from "./Resume";
import About from "./About";
import WorkSamples from "./WorkSamples";
import Contact from "./Contact";

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
        <section className="">
          <ul className="footer-ul">
            <li className="githubLink">
              <a href="https://github.com/chrismuto">Github</a>
            </li>
            <li className="linkedInLink">
              <a href="https://www.linkedin.com/in/chris-muto-8453469/">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  );
};

export default Portfolio;
