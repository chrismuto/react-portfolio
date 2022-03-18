import React, { useState } from "react";
import Navigate from "./navbar";
import Resume from "./Resume";
import About from "./About";
import WorkSamples from "./WorkSamples";
import Footer from "./Footer";

const styles = {
  page: {
    fontFamily: "roboto, sans-serif",
},
}

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
    <div className="root" style={styles.page}>
      <Navigate setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
