import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the menu

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky bg-[#07374a] text-white w-full top-0 left-0 shadow-md z-50">
      <nav className=" w-full mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-serif">KD</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#07374a] absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-6 shadow-lg">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition text-lg"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
