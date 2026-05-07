import useThemeStore from "../store/useThemeStore";

function About() {
  const { isDark } = useThemeStore();

  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "React Router",
    "Node.js",
    "Firebase",
    "Zustand",
    "Vite",
    "Bootstrap",
    "HTML & CSS",
  ];

  const certificates = [
    {
      name: "React Basics",
      issuer: "Meta — Coursera",
      year: "2023",
      grade: "87.50%",
    },
    { name: "JavaScript", issuer: "Udemy", year: "2024", grade: "" },
    {
      name: "Web Development Trainee",
      issuer: "Alabian Solutions",
      year: "2023",
      grade: "",
    },
    {
      name: "Computer Operations",
      issuer: "Peeplus Utility",
      year: "2019",
      grade: "",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-slate-900" : "bg-gray-100"
      } px-8 py-16`}
    >
      <div className="max-w-5xl mx-auto">
        <h1
          className={`text-4xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          } mb-2`}
        >
          About me
        </h1>
        <p className="text-slate-500 mb-10">Background, education and skills</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p
              className={`${
                isDark ? "text-slate-400" : "text-gray-600"
              } mb-4 leading-relaxed`}
            >
              I'm a frontend developer and Computer Science graduate from the
              University of Dundee, Scotland. I started my coding journey in
              Nigeria, learning web fundamentals at Alabian Solutions bootcamp
              in Lagos, and have since built my skills through self-study and
              real project work — progressing from HTML and CSS to React,
              TypeScript, REST APIs and fullstack development.
            </p>
            <p
              className={`${
                isDark ? "text-slate-400" : "text-gray-600"
              } mb-4 leading-relaxed`}
            >
              I enjoy building clean, functional web applications that solve
              real problems. From an AI-powered accessibility learning platform
              to a crowdfunding investment system, I focus on writing
              maintainable code and delivering good user experiences.
            </p>
            <p
              className={`${
                isDark ? "text-slate-400" : "text-gray-600"
              } mb-10 leading-relaxed`}
            >
              I'm actively looking for junior frontend developer opportunities
              where I can contribute, grow and continue learning in a
              professional team environment.
            </p>

            <h2
              className={`${
                isDark ? "text-white" : "text-gray-800"
              } font-semibold mb-4`}
            >
              Education
            </h2>
            <div
              className={`${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-gray-200"
              } border rounded-xl px-4 py-4 mb-3`}
            >
              <p
                className={`${
                  isDark ? "text-white" : "text-gray-800"
                } font-semibold`}
              >
                University of Dundee
              </p>
              <p
                className={`${
                  isDark ? "text-slate-400" : "text-gray-500"
                } text-sm`}
              >
                BSc Computer Science · 2021 – 2025
              </p>
            </div>
            <div
              className={`${
                isDark
                  ? "bg-slate-800 border-slate-700"
                  : "bg-white border-gray-200"
              } border rounded-xl px-4 py-4 mb-8`}
            >
              <p
                className={`${
                  isDark ? "text-white" : "text-gray-800"
                } font-semibold`}
              >
                Gateway Polytechnic, Nigeria
              </p>
              <p
                className={`${
                  isDark ? "text-slate-400" : "text-gray-500"
                } text-sm`}
              >
                ND Computer Science · 2020 – 2022 · Upper Credit
              </p>
            </div>

            <h2
              className={`${
                isDark ? "text-white" : "text-gray-800"
              } font-semibold mb-4`}
            >
              Certificates
            </h2>
            <div className="flex flex-col gap-3">
              {certificates.map((cert) => (
                <div
                  key={cert.name}
                  className={`${
                    isDark
                      ? "bg-slate-800 border-slate-700"
                      : "bg-white border-gray-200"
                  } border-l-4 border-l-blue-500 border rounded-xl px-4 py-3 flex justify-between items-center`}
                >
                  <div>
                    <p
                      className={`${
                        isDark ? "text-white" : "text-gray-800"
                      } text-sm font-semibold`}
                    >
                      {cert.name}
                    </p>
                    <p
                      className={`${
                        isDark ? "text-slate-400" : "text-gray-500"
                      } text-xs`}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-blue-400 text-xs ${
                        isDark ? "bg-slate-900" : "bg-gray-100"
                      } px-2 py-1 rounded-lg`}
                    >
                      {cert.year}
                    </p>
                    {cert.grade && (
                      <p className="text-green-400 text-xs mt-1">
                        {cert.grade}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2
              className={`${
                isDark ? "text-white" : "text-gray-800"
              } font-semibold mb-4`}
            >
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-400"
                      : "bg-white border-gray-200 text-gray-600"
                  } border rounded-xl px-4 py-3 text-sm`}
                >
                  <span className="text-blue-500 mr-2">→</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
