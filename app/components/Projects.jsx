import Image from "next/image";
import { projectsData } from "./../data.js";
import Link from "next/link";
function Projects() {
  return (
    <div className="container">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">اعمالنا</h2>
      <div className="flex items-center justify-around flex-wrap gap-4 py-10">
        {projectsData.map((e, i) => (
          <Link
            href={e.link}
            key={i}
            className="border-2 border-white p-4 lg:w-1/4 text-center rounded-xl"
            target="_blank"
          >
            <p className="font-bold text-center">{e.title}</p>
            <Image
              src={e.imagelink}
              alt={e.title}
              width={1000}
              height={1000}
              className="h-1/2 w-full my-5"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
