import githublogo from "../../src/GitHub-Mark.png"
import linkedInlogo from "../../src/linkedIn-logo.png"

export default function Footer() {
  return (
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
  );
}