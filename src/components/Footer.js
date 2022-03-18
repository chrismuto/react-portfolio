import githublogo from "../../src/assets/GitHub-Mark.png"
import linkedInlogo from "../../src/assets/linkedIn-logo.png"
import emailIcon from "../../src//assets/emailIcon.png"

export default function Footer() {
  return (
      <footer className="footer">
          <ul className="footer-ul">
          <li>
              <a href="mailto: chrismuto@gmail.com">
              <img src={emailIcon} alt="email"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chris-muto-8453469/">
              <img src={linkedInlogo} alt="linkedIn profile"/>
              </a>
            </li>
            <li className="githubLink">
              <a href="https://github.com/chrismuto">
              <img src={githublogo} alt="github profile"/>
              </a>
            </li>
          </ul>
      </footer>
  );
}