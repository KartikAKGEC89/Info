import { getConfigData } from "../data/configReader";

export default function Home() {
  const configData = getConfigData();
  const projects = configData.projects;

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
        <p className="text-gray-600 text-sm">
          A showcase of my recent work and projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 border border-gray-200"
          >
            <div className="h-48 rounded-t-lg overflow-hidden bg-gray-100">
              <img
                src={project["project-image-url"]}
                alt={project["project-name"]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {project["project-name"]}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {project["project-desc"]}
              </p>
              <a
                href={project["project-git"]}
                className="mt-4 text-indigo-600 text-sm font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
