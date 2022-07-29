import React from "react";
import resume from "../assets/resume.pdf";

const styles = {
  resumePDF: {
    height: "100vh",
    textAlign: "center",
    marginTop: "2%",
  },
};

const Resume = () => {
  document.title = "Resume";
  return (
      <div className="resumeIframe" style={styles.resumePDF}>
        <a href={resume} download>
          <iframe title="Resume" src={`${resume}#view=fitH`} height="100%" width="60%" />
        </a>
      </div>
  );
};

export default Resume;
