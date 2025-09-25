import { useState } from "react";
import mid from "../assets/mid.jpg";
import design1 from "../assets/design1.png";
import design2 from "../assets/design2.png";
import design3 from "../assets/design3.jpeg";
import design4 from "../assets/design4.jpeg";
import design5 from "../assets/design5.png";
export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleExpand = (index) => {
    setExpandedProjects((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const description6 = `Treevah is a next-generation file management system designed to offer a faster, smarter, and more user-friendly alternative to traditional file explorers. By combining modern UI/UX with intelligent backend logic, Treevah helps users organize, locate, and interact with their files in a seamless way—no more endless clicking or hunting through subfolders.`;
  const description1 = `The Midwest Pumpkins project is a fully responsive web application dedicated to celebrating the beauty and versatility of pumpkins during the fall season.`;
  const description2 = `BLeaf makes self-care easy by giving users the support they need to meet their personal care goals. This app allows users to keep track of their personal care activities throughout the day and gives them the option to set up reminders, guilt and pressure free. While finding time to set goals and sticking to healthy habits can be difficult, it is extremely helpful to a person’s well-being. Self-care can help manage stress, lower the risk of illness, increase energy, and elevate moods. This is why bLeaf rewards positive habits day-by-day rather than promoting shame in a user for not always meeting their goals. A flower pot is provided to each user upon creating an account. In exchange for completing healthy habits, the user will see their flower grow. BLeaf celebrates even the small victories, aiming to help users bLeaf in themselves. Compatible with IOS mobile devices.`;
  const description3 = `This project is an Online Library Management System built using React.js, Redux, and Tailwind CSS. It allows users to browse, add, and manage books in an online library. The application includes a responsive UI and uses React Router for navigation.`;
  const description4 = `This project is an Online Library Management System built using React.js, Redux, and Tailwind CSS. It allows users to browse, add, and manage books in an online library. The application includes a responsive UI and uses React Router for navigation.`;
  const description5 = `Warehouse Is An Electronics, Grocery, Super Market, Mall & Marketplace Stores Powerful Multipurpose Responsive Theme. Best of 2022 Top-Selling Theme Having More Than 5+ Theme layouts & 150+ Features & Modules With In Detailed Documentation.`;

  const maxLength = 150; // Maximum characters before "See More"

  return (
    <div
      id="Projects"
      className="mb-36 px-10 md:px-6 md:mb-20 max-[480px]:px-4 max-[480px]:mb-8 projects-content text-center flex flex-col items-center justify-center"
    >
      <h3 className="text-xxl max-[480px]:text-xl text-center main-title font-bold pb-10 max-[480px]:pb-6">
        Projects
      </h3>
      <div className="projects-inner grid lg:grid-cols-3 gap-4 md:grid-cols-2">
        {/* Project 1 */}
        <div className="project rounded-lg p-5 bg-zinc-800 max-[480px]:p-2">
          <div className="img pb-5 max-[480px]:pb-3">
            <a href="">
              <img src={design5} className="rounded-lg" />
            </a>
          </div>
          <div className="desc text-left">
            <strong className="pb-2 text-xl max-[480px]:text-lg">
              Treevah - The File Management
            </strong>
            <div className="pb-2">Role: Full Stack Developer</div>
            <div className="description pb-2">
              <div>
                Description:{" "}
                {expandedProjects[0]
                  ? description6
                  : `${description6.slice(0, maxLength)}...`}
              </div>
              <button
                onClick={() => toggleExpand(0)}
                className="text-orange-600 see-more-button"
              >
                {expandedProjects[0] ? "See Less" : "See More"}
              </button>
            </div>
            <div className="pb-2">
              Technologies: React.js, Redux Toolkit, Node.js, Express.js,
              PostgreSQL, Redis, Azure, REST APIs, HTML5, CSS3, JavaScript
            </div>
            <div className="buttons-group flex pb-2">
              {/* <a
                href="https://treevah.vercel.app/login"
                className="flex mr-2 justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Website
              </a> */}
              <a
                className="flex justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="https://github.com/filter-folder/filterfolder-cloud"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className="project rounded-lg p-5 bg-zinc-800 max-[480px]:p-2">
          <div className="img pb-5 max-[480px]:pb-3">
            <a href="">
              <img src={mid} className="rounded-lg" />
            </a>
          </div>
          <div className="desc text-left">
            <strong className="pb-2 text-xl max-[480px]:text-lg">
              Hacktoberfest 2024 Contributor
            </strong>
            <div className="pb-2">Role: Frontend Developer</div>
            <div className="description pb-2">
              <div>
                Description:{" "}
                {expandedProjects[0]
                  ? description1
                  : `${description1.slice(0, maxLength)}...`}
              </div>
              <button
                onClick={() => toggleExpand(0)}
                className="text-orange-600 see-more-button"
              >
                {expandedProjects[0] ? "See Less" : "See More"}
              </button>
            </div>
            <div className="pb-2">
              Technologies: HTML, CSS, JavaScript, Vite, GitHub
            </div>
            <div className="buttons-group flex pb-2">
              <a
                href="https://midwestpumpkins.netlify.app/"
                className="flex mr-2 justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Website
              </a>
              <a
                className="flex justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="https://github.com/OpenCodeChicago/Midwest-Pumpkins"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project rounded-lg p-5 bg-zinc-800 max-[480px]:p-2">
          <div className="img pb-5 max-[480px]:pb-3">
            <a href="">
              <img src={design1} className="rounded-lg" />
            </a>
          </div>
          <div className="desc text-left">
            <strong className="pb-2 text-xl max-[480px]:text-lg">
              React Native App
            </strong>
            <div className="pb-2">Role: Full-stack Developer</div>
            <div className="description pb-2">
              <div>
                Description:{" "}
                {expandedProjects[1]
                  ? description2
                  : `${description2.slice(0, maxLength)}...`}
              </div>
              <button
                onClick={() => toggleExpand(1)}
                className="text-orange-600 see-more-button"
              >
                {expandedProjects[1] ? "See Less" : "See More"}
              </button>
            </div>
            <div className="pb-2">
              Technologies: React Native, NPM, PostgreSQL, Express.js, Figma,
              Xcode, Balsamiq, The Spriters Resource, Node.js, JavaScript, Vite,
              GitHub, Expo
            </div>
            <div className="buttons-group flex pb-2">
              <a
                className="flex justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="https://github.com/CapstoneBLeaf/BLeaf"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project rounded-lg p-5 bg-zinc-800 max-[480px]:p-2">
          <div className="img pb-5 max-[480px]:pb-3">
            <a href="">
              <img src={design2} className="rounded-lg" />
            </a>
          </div>
          <div className="desc text-left">
            <strong className="pb-2 text-xl max-[480px]:text-lg">
              Online Library Management
            </strong>
            <div className="pb-2">Role: Full-stack Developer</div>
            <div className="description pb-2">
              <div>
                Description:{" "}
                {expandedProjects[2]
                  ? description3
                  : `${description3.slice(0, maxLength)}...`}
              </div>
              <button
                onClick={() => toggleExpand(2)}
                className="text-orange-600 see-more-button"
              >
                {expandedProjects[2] ? "See Less" : "See More"}
              </button>
            </div>
            <div className="pb-2">
              Technologies: HTML, CSS, JavaScript, Vite, GitHub, React,
              Express.js, Node.js, PostgreSQL
            </div>
            <div className="buttons-group flex pb-2">
              <a
                href="https://midwestpumpkins.netlify.app/"
                className="flex mr-2 justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Website
              </a>
              <a
                className="flex justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="https://github.com/OpenCodeChicago/Midwest-Pumpkins"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project rounded-lg p-5 bg-zinc-800 max-[480px]:p-2">
          <div className="img pb-5 max-[480px]:pb-3">
            <a href="">
              <img src={design3} className="rounded-lg" />
            </a>
          </div>
          <div className="desc text-left">
            <strong className="pb-2 text-xl max-[480px]:text-lg">
              Fashion HTML Template
            </strong>
            <div className="pb-2">Role: Frontend Developer</div>
            <div className="description pb-2">
              <div>
                Description:{" "}
                {expandedProjects[3]
                  ? description4
                  : `${description4.slice(0, maxLength)}...`}
              </div>
              <button
                onClick={() => toggleExpand(3)}
                className="text-orange-600 see-more-button"
              >
                {expandedProjects[3] ? "See Less" : "See More"}
              </button>
            </div>
            <div className="pb-2">
              Technologies: Bootstrap, Flexbox, HTML, CSS, JavaScript, and
              jQuery.
            </div>
            <div className="buttons-group flex pb-2">
              <a
                href="https://demo.templatetrip.com/Html/HTML001_victoria/"
                className="flex mr-2 justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Website
              </a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project rounded-lg p-5 bg-zinc-800 max-[480px]:p-2">
          <div className="img pb-5 max-[480px]:pb-3">
            <a href="">
              <img src={design4} className="rounded-lg" />
            </a>
          </div>
          <div className="desc text-left">
            <strong className="pb-2 text-xl max-[480px]:text-lg">
              Prestashop Ecommerce Website
            </strong>
            <div className="pb-2">Role: Full-Stack Developer</div>
            <div className="description pb-2">
              <div>
                Description:{" "}
                {expandedProjects[4]
                  ? description5
                  : `${description5.slice(0, maxLength)}...`}
              </div>
              <button
                onClick={() => toggleExpand(4)}
                className="text-orange-600 see-more-button"
              >
                {expandedProjects[4] ? "See Less" : "See More"}
              </button>
            </div>
            <div className="pb-2">
              Technologies: Bootstrap, Flexbox, HTML, CSS, JavaScript, and
              jQuery.
            </div>
            <div className="buttons-group flex pb-2">
              <a
                href="https://prestashop1.templatetrip.com/PRS01/PRS005_warehouse/en/"
                className="ease-linear flex mr-2 justify-center rounded-full bg-orange-600 px-4 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
