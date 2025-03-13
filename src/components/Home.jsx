import profile_img from "../assets/tanu.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
export default function Home() {
  return (
    <div
      id="Home"
      className="mt-36 mb-36 md:mb-20 max-[768px]:mt-10 max-[480px]:mb-16"
    >
      <div className="home flex max-[768px]:block justify-center items-center px-10 lg:px-8 md:px-6 max-[480px]:px-4">
        <div className="social-icons">
          {" "}
          <div className="flex max-[768px]:block flex-col space-y-4 mb-4 md:mb-0 max-[768px]:space-x-2">
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
        <div className="left-grid mx-14 lg:mx-10 md:mx-6 max-[768px]:mx-0">
          <h1 className="text-xxl xl:text-xxl lg:text-3xl md:text-2xl max-[480px]:text-lg font-bold title mb-8 lg:mb-6 md:mb-4  max-[480px]:mb-2">
            Hello , I am Tanvi Patel
          </h1>
          <h2 className="text-xl lg:text-lg md:text-base font-bold mb-6 lg:mb-4 md:mb-2 max-[480px]:mb-2">
            Front End Developer | Full Stack Developer
          </h2>
          <p className="max-[768px]:mb-4">
            I’m a Chicago-based full-stack developer with a strong focus on
            creating intuitive, high-performing applications. I enjoy exploring
            new technologies and honing my skills to deliver meaningful digital
            products.
          </p>
        </div>
        <div className="image">
          <img src={profile_img}></img>
        </div>
      </div>
    </div>
  );
}
