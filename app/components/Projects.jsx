import Card from "./Card";
import testImg from "../assets/website.png";
import Img1 from "../assets/projects/1.png";
import Img2 from "../assets/projects/2.png";
import Img3 from "../assets/projects/3.png";
import Img4 from "../assets/projects/4.png";
import Img5 from "../assets/projects/5.png";
import Img6 from "../assets/projects/6.png";
import Img7 from "../assets/projects/7.png";
import Img8 from "../assets/projects/8.png";
import Img9 from "../assets/projects/9.png";
import Img10 from "../assets/projects/10.png";

import Link from "next/link";

async function Projects() {
  const cardDetail = [
    { img: Img1, title: "ابن العود للسيارات", domain: "" },
    { img: Img2, title: "Brainwave", domain: "" },
    { img: Img3, title: "Profile", domain: "" },
    { img: Img4, title: "Iphone 15", domain: "" },
    { img: Img5, title: "دار الاسيل", domain: "" },
    { img: Img6, title: "لوحه تحكم", domain: "" },
    { img: Img7, title: "شركة راميتا", domain: "" },
    { img: Img8, title: "شركة راميتا", domain: "" },
    { img: Img9, title: "شيبان للالبسة", domain: "" },
    { img: Img10, title: "شيبان للالبسة", domain: "" },
  ];
  const Data = await fetch("https://api.vercel.com/v1/projects", {
    method: "GET",
    headers: {
      Authorization: `Bearer Xl60I7IZ5nmCJrFt0Dj9r7Q6`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((projects) => {
      projects.map((e, i) => {
        cardDetail[i].domain = e.alias[0].domain;
      });
    });

  return (
    <div className="min-h-screen container">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">أعمالنا</h2>
      <div className="flex items-center flex-wrap justify-around mb-10">
        {cardDetail.map((e, i) => (
          <Link
            key={i}
            href={`https://${e.domain}`}
            target="_blank"
            className="lg:w-[25%]"
          >
            <Card img={e.img} title={e.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
