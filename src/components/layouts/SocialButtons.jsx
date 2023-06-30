import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialButtons = () => {
  return (
    <nav className="socialNav">
      <ul className="socialButtons">
        <li className="socialButtons__element">
          <a
            href="https://twitter.com/Jawa_Design"
            target="_blank"
            className="socialButtons__element__link socialButtons__element__link--twit"
          >
            <FontAwesomeIcon className="socialIcon" icon={faTwitter} />
            <span className="socialText">Twitter</span>
          </a>
        </li>
        <li className="socialButtons__element">
          <a
            href="https://www.linkedin.com/in/julien-armand-342867120/"
            target="_blank"
            className="socialButtons__element__link socialButtons__element__link--linked"
          >
            <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
            <span className="socialText">LinkedIn</span>
          </a>
        </li>
        <li className="socialButtons__element">
          <a
            href="https://github.com/JAWA33"
            target="_blank"
            className="socialButtons__element__link socialButtons__element__link--git"
          >
            <FontAwesomeIcon className="socialIcon" icon={faGithub} />
            <span className="socialText">GitHub</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialButtons;
