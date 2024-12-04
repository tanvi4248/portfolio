import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Gototop from "./Gototop";
function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-200 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2">Contact Me</h4>
          <p>
            Email:{" "}
            <a href="mailto:tanvih0501@gmail.com" className="text-orange-400">
              tanvih0501@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+18473080102" className="text-orange-400">
              +1 847-308-0102
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-4 md:mb-0 max-[480px]:mb-0">
          <a
            href="https://github.com/tanvi4248"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tdhpatel/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>
      </div>
      <Gototop></Gototop>
    </footer>
  );
}

export default Footer;
