function ProjectCard({ project, isDark }) {
  return (
    <div
      className={`${isDark ? "bg-slate-800" : "bg-white"} border ${
        project.featured
          ? "border-blue-500"
          : isDark
          ? "border-slate-700"
          : "border-gray-200"
      } rounded-xl p-6 flex flex-col gap-4`}
    >
      {project.featured && (
        <span className="text-xs text-blue-400 bg-blue-950 px-2 py-1 rounded-full w-fit">
          Featured
        </span>
      )}
      <div>
        <h3
          className={`${
            isDark ? "text-white" : "text-gray-800"
          } font-semibold text-lg mb-2`}
        >
          {project.name}
        </h3>
        <p
          className={`${
            isDark ? "text-slate-400" : "text-gray-600"
          } text-sm leading-relaxed`}
        >
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs ${
              isDark
                ? "text-slate-400 bg-slate-900 border-slate-700"
                : "text-gray-600 bg-gray-100 border-gray-200"
            } px-2 py-1 rounded-lg border`}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-auto">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Live
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`text-xs border ${
            isDark
              ? "border-slate-600 text-slate-400 hover:text-white"
              : "border-gray-300 text-gray-600 hover:text-gray-900"
          } px-4 py-2 rounded-lg font-semibold`}
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
