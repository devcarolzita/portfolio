import { typeProject } from "../../types/types";

const Project = ({projectName, description, tags}: typeProject) => {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm bg-zinc-900 border-zinc-800 overflow-hidden max-w-sm">
      <div className="aspect-video relative">
        <img
          className="object-cover w-full h-full"
          src="./projects/galeria.png"
          alt="Projeto"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold"> {projectName} </h3>
        <p className="text-zinc-400">
          {description}      
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((element:string) => <span className="inline-block rounded-full bg-purple-800/20 text-purple-500 px-3 py-1 text-xs text-primary">
            {element}
          </span>)}
          <span className="inline-block rounded-full bg-purple-800/20 text-purple-500 px-3 py-1 text-xs text-primary">
            {/* Design
          </span>
          <span className="inline-block rounded-full bg-purple-800/20 text-purple-500 px-3 py-1 text-xs text-primary">
           React
          </span>
          <span className="inline-block rounded-full bg-purple-800/20 text-purple-500 px-3 py-1 text-xs text-primary">
            Tailwind */}
          </span>
        </div>
        <div className="flex gap-4 pt-2">
          <button className="flex items-center justify-center  border border-gray-800 bg-black rounded-md px-3 gap-1 cursor-pointer transition duration-500 ease-in-out hover:scale-110'">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github h-4 w-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            Code
          </button>
          <button className="flex items-center justify-center bg-purple-500 text-primary-foreground hover:bg-purple-300 h-9 rounded-md px-3 gap-1 transition duration-500 ease-in-out hover:scale-110">
            Live Demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-arrow-right h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
