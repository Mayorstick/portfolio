import { Link } from "react-router-dom";
import { useState } from "react";
import useThemeStore from "../store/useThemeStore";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div
      className={`${
        isDark ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200"
      } border-b`}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <h1
          className={`${
            isDark ? "text-white" : "text-gray-800"
          } font-bold text-xl`}
        >
          Elijah<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm transition-colors`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm transition-colors`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm transition-colors`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm transition-colors`}
          >
            Contact
          </Link>
          <button onClick={toggleTheme} className="text-lg">
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${
            isDark
              ? "text-slate-400 hover:text-white"
              : "text-gray-500 hover:text-gray-900"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col px-8 pb-4 gap-4 ${
            isDark ? "bg-slate-900" : "bg-white"
          }`}
        >
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm`}
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`${
              isDark
                ? "text-slate-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } text-sm`}
          >
            Contact
          </Link>
          <button onClick={toggleTheme} className="text-lg text-left">
            {isDark ? "☀️ Light mode" : "🌙 Dark mode"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
