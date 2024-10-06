import Image from "next/image";
import Bg from "./components/Bg.jsx";
import Typing from "./components/Typeing";
import Projects from "./components/Projects";
import WhyWe from "./components/WhyWe";
import LetsStart from "./components/LetsStart";

export default function Home() {
  return (
    <>
      <Typing />
      <Projects />
      <WhyWe />
      <LetsStart />
    </>
  );
}
