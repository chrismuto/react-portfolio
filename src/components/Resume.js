import React, { useState } from "react";
import resumeImage from "../assets/resume.png";

const styles = {
  resumeImage: {
    width: "75vh",
    margin: "auto",
  },
};

const Resume = () => {
  document.title = "Resume";
  return (
    <div>
      <div className="resumeIframe" style={styles.resumeImage}>
        <a href={resumeImage} download>
          <img alt="Resume" src={resumeImage} className="resumeImage" />
        </a>
      </div>
    </div>
  );
};

export default Resume;
