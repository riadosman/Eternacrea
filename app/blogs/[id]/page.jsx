import { blogsData } from "../../data.js";
import Image from "next/image";
import Link from "next/link";

function BlogId({ params }) {
  return (
    <div className="container flex items-center justify-between gap-10">
      <div className="lg:w-3/5 min-h-[80vh] my-10">
        <Image
          src={blogsData[params.id - 1].image}
          alt={blogsData[params.id - 1].title}
          width={1000}
          height={1000}
          className=""
        />
        <p className="my-4 font-bold text-xl">
          {blogsData[params.id - 1].title}
        </p>
        <p className="mb-6">{blogsData[params.id - 1].description}</p>

        {blogsData[params.id - 1].content.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              {section.sectionTitle}
            </h3>
            {section.sectionTitle === "المصادر" ? (
              <ul>
                {section.text.map((source, idx) => (
                  <li key={idx}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{section.text}</p>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex flex-col w-2/5 items-center">
        {blogsData
          .sort(() => 0.5 - Math.random()) // ترتيب عشوائي للعناصر
          .slice(0, 2) // أخذ عنصرين فقط
          .map((blog) => (
            <div
              key={blog.id}
              className="border-2 border-black rounded p-5 w-3/4 my-2"
            >
              <Image
                src={blog.image}
                alt="mission"
                width={1000}
                height={200}
                className="w-full h-40"
              />
              <p className="my-4">{blog.title}</p>
              <p>{blog.description}</p>
              <Link href={blog.link}>
                <p className="text-pink underline cursor-pointer">المزيد</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BlogId;
