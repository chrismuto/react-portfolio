import githublogo from "../../src/assets/GitHub-Mark.png"
import linkedInlogo from "../../src/assets/linkedIn-logo.png"
import emailIcon from "../../src//assets/emailIcon.png"

export default function Footer() {
  return (
      <footer className="m-5 align-right">
        <div className="d-flex justify-content-end">
          {/* <ul className="d-flex justify-content-around list-style-none">
          <li> */}
              <a href="mailto: chrismuto@gmail.com" className="text-dark m-2">
              <img src={emailIcon} alt="contact by mail"></img>
              </a>
            {/* </li>
            <li> */}
              <a href="https://www.linkedin.com/in/chris-muto-8453469/" className="text-dark m-2">
              <img src={linkedInlogo} alt="LinkedIn profile"></img>
              </a>
            {/* </li>
            <li className="githubLink"> */}
              <a href="https://github.com/chrismuto" className="text-dark m-2">
              <img src={githublogo} alt="github profile"></img>
              </a>
            {/* </li>
          </ul> */}
          </div>
      </footer>
  );
}