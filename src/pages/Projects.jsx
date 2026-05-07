import ProjectCard from "../components/ProjectCard";
import useThemeStore from "../store/useThemeStore";

const projects = [
  {
    name: "Accessibility Explainer",
    description:
      "AI-powered fullstack app teaching web accessibility through gamification, XP missions and OpenAI feedback.",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "OpenAI"],
    live: "https://final-year-project-mocha-phi.vercel.app/login",
    github: "https://github.com/Mayorstick/Final-Year-Project",
    featured: true,
  },
  {
    name: "Fundify",
    description:
      "Crowdfunding investment platform where businesses pitch for funding. My role: frontend and AI pitch review.",
    tags: ["React", "Node.js", "AI"],
    live: "",
    github: "https://github.com/KingHazo/AC41004---Industrial-Team-Project",
    featured: true,
  },
  {
    name: "Weather App",
    description:
      "Real-time weather app using OpenWeatherMap API with city search, temperature, humidity and wind speed.",
    tags: ["React", "Tailwind", "REST API"],
    live: "https://69f3b54fa656270008fa50a1--luxury-palmier-745716.netlify.app/",
    github: "https://github.com/Mayorstick/weather-app",
  },
  {
    name: "Expense Tracker",
    description:
      "Personal finance tracker with income and expense management, live balance calculation and color-coded UI.",
    tags: ["React", "Tailwind CSS"],
    live: "https://darling-donut-4680a7.netlify.app/",
    github: "https://github.com/Mayorstick/expenseTracker",
  },
  {
    name: "GitHub Profile Finder",
    description:
      "Search any GitHub user and display real profile data using GitHub REST API and React Router.",
    tags: ["React", "React Router", "GitHub API"],
    live: "https://iridescent-kelpie-46a8ac.netlify.app/",
    github: "https://github.com/Mayorstick/github-profile-finder",
  },
  {
    name: "Todo App React",
    description:
      "Task manager with add, delete, complete and dark/light mode toggle. Built in React with Tailwind.",
    tags: ["React", "Tailwind CSS"],
    live: "https://vermillion-douhua-d813ba.netlify.app/",
    github: "https://github.com/Mayorstick/todoReact",
  },
  {
    name: "Todo App",
    description:
      "Vanilla JavaScript todo list with add, delete, complete tasks and live task counter.",
    tags: ["JavaScript", "Bootstrap"],
    live: "https://playful-praline-690f44.netlify.app/",
    github: "https://github.com/Mayorstick/todo-app",
  },
];

function Projects() {
  const { isDark } = useThemeStore();

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
          My Projects
        </h1>
        <p className="text-slate-500 mb-10">
          Things I've built — all live and on GitHub
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
