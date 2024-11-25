import { useState } from "react";
import { Link } from "react-router-dom";
import Resume from "./Resume";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the section
      });
    }
    setMenuOpen(false); // Close menu on navigation
  };

  return (
    <div className="header text-base bg-white shadow-md sticky top-0 z-50">
      <div className="header-content flex items-center justify-between px-10 py-6 md:px-6 max-[480px]:px-4 max-[480px]:py-2">
        <div className="header-left font-primary font-semibold text-xl max-[480px]:text-lg">
          Tanvi Patel
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-white-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-5 items-center">
            <li onClick={() => scrollToSection("home")}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => scrollToSection("About")}>
              <Link to="/About">About</Link>
            </li>
            <li onClick={() => scrollToSection("Projects")}>
              <Link to="/Projects">Projects</Link>
            </li>
            <li onClick={() => scrollToSection("experience")}>
              <Link to="/experience">Experience</Link>
            </li>
            <li onClick={() => scrollToSection("Contact")}>
              <Link to="/Contact">Contact</Link>
            </li>
            <Resume />
          </ul>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute menu z-20 right-0 shadow-md w-full bg-zinc-900	 md:hidden">
            <ul className="flex flex-col items-start px-8 py-4 space-y-4">
              <li onClick={() => scrollToSection("home")}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => scrollToSection("About")}>
                <Link to="/About">About</Link>
              </li>
              <li onClick={() => scrollToSection("Projects")}>
                <Link to="/Projects">Projects</Link>
              </li>
              <li onClick={() => scrollToSection("experience")}>
                <Link to="/experience">Experience</Link>
              </li>
              <li onClick={() => scrollToSection("Contact")}>
                <Link to="/Contact">Contact</Link>
              </li>
              <Resume />
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
