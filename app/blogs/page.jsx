import Image from "next/image";
import Missinon from "../assets/mission.png";
import Link from "next/link";

import { blogsData } from "../data.js";

function Blogs() {
  return (
    <div className="container min-h-[80vh] contianer py-10 flex items-center justify-around gap-4 flex-wrap">
      {blogsData.map((blog) => (
        <div
          key={blog.id}
          className="border-2 border-black rounded p-5 text-2xl lg:text-lg lg:w-1/4 lg:h-[450px]"
        >
          <Image
            src={blog.image}
            alt="mission"
            width={1000}
            height={200}
            className="w-full h-40"
          />
          <p className="my-4 font-bold">{blog.title}</p>
          <p>{blog.description}</p>
          <Link href={blog.link}>
            <p className="text-pink underline cursor-pointer">المزيد</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
