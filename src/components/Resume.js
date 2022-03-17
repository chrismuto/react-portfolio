import React, { useState } from "react";
import resumeImage from "../resume.png";

const styles = {
    resumeImage: {
        width: "75vh",
        margin: "auto",
    }
}

const Resume = () => {
  document.title = "Resume";
  return (
      <div>
        <div className="resumeIframe" style={styles.resumeImage}>
      <img alt="Resume" src ={resumeImage} className="resumeImage"/>
      </div>
    </div>
  );
};

export default Resume;
