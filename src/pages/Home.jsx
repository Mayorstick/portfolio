import { Link } from "react-router-dom";
import photo from "../assets/elijah.png";
import useThemeStore from "../store/useThemeStore";

function Home() {
  const { isDark } = useThemeStore();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-slate-900" : "bg-gray-100"
      } px-8 py-20`}
    >
      <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <span className="inline-block bg-blue-950 text-blue-400 text-xs px-3 py-1 rounded-full mb-6">
            Available for work
          </span>
          <h1
            className={`text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } mb-4 leading-tight`}
          >
            Frontend Developer
            <br />
            based in <span className="text-blue-500">Scotland</span>
          </h1>
          <p
            className={`${
              isDark ? "text-slate-400" : "text-gray-600"
            } text-lg mb-8 leading-relaxed`}
          >
            BSc Computer Science graduate building clean, responsive web
            applications with React, JavaScript and Tailwind CSS.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm"
            >
              View my work
            </Link>
            <a
              href="https://drive.google.com/file/d/1HaddGaB6SWGsP0MzbXKmz0rpGUK7h66n/view"
              className="bg-transparent border border-green-600 text-green-400 hover:bg-green-950 px-6 py-3 rounded-lg font-semibold text-sm"
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className={`bg-transparent border ${
                isDark
                  ? "border-slate-600 text-slate-400 hover:text-white"
                  : "border-gray-400 text-gray-600 hover:text-gray-900"
              } px-6 py-3 rounded-lg font-semibold text-sm`}
            >
              Contact me
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {[
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git",
              "REST APIs",
              "React Router",
              "TypeScript",
              "Node.js",
              "HTML5",
              "CSS",
              "Bootstrap",
            ].map((skill) => (
              <span
                key={skill}
                className={`${
                  isDark
                    ? "bg-slate-800 text-slate-400 border-slate-700"
                    : "bg-white text-gray-600 border-gray-300"
                } text-xs px-3 py-2 rounded-full border`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src={photo}
            alt="Elijah"
            className="w-56 h-56 rounded-full border-4 border-blue-500 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
