import Image from "next/image";
import { projectsData } from "./../data.js";
function Projects() {
  return (
    <div className=" container flex items-center justify-around flex-wrap gap-4">
      {projectsData.map((e, i) => (
        <div
          key={i}
          className="border-2 border-white p-4 h-96 w-1/4 text-center rounded-xl"
        >
          <p className="font-bold text-center">{e.title}</p>
          <Image
            src={e.imagelink}
            alt={e.title}
            width={1000}
            height={1000}
            className="h-1/2 w-full"
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
