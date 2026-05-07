import useThemeStore from "../store/useThemeStore";

function Contact() {
  const { isDark } = useThemeStore();

  const links = [
    {
      icon: "@",
      label: "Email",
      value: "amolusegunelijah838@gmail.com",
      href: "mailto:amolusegunelijah838@gmail.com",
    },
    {
      icon: "gh",
      label: "GitHub",
      value: "github.com/Mayorstick",
      href: "https://github.com/Mayorstick",
    },
    {
      icon: "in",
      label: "LinkedIn",
      value: "linkedin.com/in/elijah-olusegun",
      href: "https://www.linkedin.com/in/elijah-olusegun-8bb2772b2",
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-slate-900" : "bg-gray-100"
      } px-8 py-16`}
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className={`text-4xl font-bold ${
            isDark ? "text-white" : "text-gray-800"
          } mb-2`}
        >
          Get in touch
        </h1>
        <p className="text-slate-500 mb-10">
          Open to junior frontend opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div
              className={`${
                isDark
                  ? "bg-slate-800 border-green-800"
                  : "bg-white border-green-300"
              } border rounded-xl p-4 flex items-center justify-between`}
            >
              <div>
                <p className="text-green-400 font-semibold text-sm">
                  Download my CV
                </p>
                <p className="text-slate-500 text-xs">PDF · Updated 2025</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1HaddGaB6SWGsP0MzbXKmz0rpGUK7h66n/view"
                target="_blank"
                rel="noreferrer"
                className="border border-green-600 text-green-400 hover:bg-green-950 px-4 py-2 rounded-lg text-sm font-semibold"
              >
                Download
              </a>
            </div>

            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`${
                  isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-gray-200"
                } border rounded-xl p-4 flex items-center gap-4 hover:border-blue-500 transition-colors`}
              >
                <div
                  className={`w-10 h-10 rounded-lg ${
                    isDark ? "bg-slate-900" : "bg-gray-100"
                  } flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0`}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className={`${
                      isDark ? "text-white" : "text-gray-800"
                    } text-sm font-semibold`}
                  >
                    {item.value}
                  </p>
                  <p className="text-slate-500 text-xs">{item.label}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label
                className={`${
                  isDark ? "text-slate-400" : "text-gray-600"
                } text-xs mb-2 block`}
              >
                Your name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className={`w-full ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300"
                    : "bg-white border-gray-300 text-gray-800"
                } border rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500`}
              />
            </div>
            <div>
              <label
                className={`${
                  isDark ? "text-slate-400" : "text-gray-600"
                } text-xs mb-2 block`}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className={`w-full ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300"
                    : "bg-white border-gray-300 text-gray-800"
                } border rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500`}
              />
            </div>
            <div>
              <label
                className={`${
                  isDark ? "text-slate-400" : "text-gray-600"
                } text-xs mb-2 block`}
              >
                Message
              </label>
              <textarea
                placeholder="I'd like to discuss..."
                rows={5}
                className={`w-full ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300"
                    : "bg-white border-gray-300 text-gray-800"
                } border rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 resize-none`}
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-sm">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
