import { useState } from "react";
import { getConfigData } from "../data/configReader";
import { Link } from "react-router-dom";

export default function Card() {
  const configData = getConfigData();
  const projects = configData.projects;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const svgClass = isHovered
    ? "w-6 h-6 text-gray-500 transition delay-150"
    : "w-6 h-6 text-gray-300";

  return (
    <>
      <div className="px-2">
        <div className="flex flex-col bg-gray-100 rounded-lg px-5 py-5 ">
          <div className="flex items-center justify-between mb-5">
            <div className="font-medium text-lg flex items-center gap-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              Projects
            </div>
            <Link to={'https://info-tan.vercel.app/projects'} >
            <button
              type="button"
              className="gap-x-2 text-gray-900 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
  {projects.map((project, index) => (
    <a
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href=""
      className="drop-shadow-lg card bg-white rounded-lg px-5 py-4 flex flex-col md:flex-row items-center transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md border border-gray-200 hover:border-gray-300"
    >

      <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col items-center md:items-start">
        <h1 className="text-lg font-semibold text-gray-800">
          {project["project-name"]}
        </h1>
        <p className="text-sm text-gray-500 text-center md:text-left">
          {project["project-desc"]}
        </p>
        <p className="text-sm text-gray-500 text-center md:text-left">
          <span className="text-black font-semibold">Technology Used :- </span>{project["technologies-used"]}
        </p>
      </div>
      <Link to={"http://localhost:3000/projects"}>
      <button className="ml-auto hidden md:inline-block bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200">
        <svg
          className="w-6 h-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        </button>
        </Link>
    </a>
  ))}
</div>

        </div>
      </div>
    </>
  );
}
