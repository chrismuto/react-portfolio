import React, { useState } from "react";
import Navbar from "./navbar";
import Resume from "./Resume";
import About from "./About";
import WorkSamples from "./WorkSamples";
import Footer from "./Footer";


const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("About");
  document.title = "Portfolio";

  const renderPage = () => {
    switch (currentPage) {
      case "WorkSamples":
        return <WorkSamples />;
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
      <Footer />
    </div>
  );
};

export default Portfolio;
