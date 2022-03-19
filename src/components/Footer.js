import githublogo from "../../src/assets/GitHub-Mark.png"
import linkedInlogo from "../../src/assets/linkedIn-logo.png"
import emailIcon from "../../src//assets/emailIcon.png"

export default function Footer() {
  return (
      <footer className="m-5 fs-5">
          <ul className="d-flex justify-content-around">
          <li>
              <a href="mailto: chrismuto@gmail.com" className="text-dark">
              Chrismuto@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chris-muto-8453469/" className="text-dark">
              LinkedIn profile
              </a>
            </li>
            <li className="githubLink">
              <a href="https://github.com/chrismuto" className="text-dark">
              github profile
              </a>
            </li>
          </ul>
      </footer>
  );
}