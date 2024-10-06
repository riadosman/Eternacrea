"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import cross from "../assets/icons/icons8-cross-50.png";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="bg-purple py-5">
      <div className="container flex items-center justify-around">
        <Link href="/" className="flex items-center flex-row-reverse gap-5">
          <Image src={logo} alt="logo" width={70} height={50} />
          <p>EternaCrea</p>
        </Link>

        <ul className="lg:flex items-center justify-between gap-14 hidden ">
          <li>
            <Link href="/">الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link href="/about">من نحن ؟</Link>
          </li>
          <li>
            <Link href="/web-design">تصميم الموقع</Link>
          </li>
          <li>
            <Link href="/blogs">المقالات</Link>
          </li>
        </ul>
        {showMenu && (
          <ul className="bg-dark-blue overflow-y-hidden border-r-2 p-5 text-2xl flex flex-col gap-14 border-white absolute top-0 left-0 z-10 w-[70%] h-full">
            <li onClick={handleClick} className="cursor-pointer">
              <Image src={cross} alt="cross" width={50} height={50} />
            </li>
            <li>
              <Link href="/" onClick={handleClick}>
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleClick}>
                من نحن ؟
              </Link>
            </li>
            <li>
              <Link href="/web-design" onClick={handleClick}>
                تصميم الموقع
              </Link>
            </li>
            <li>
              <Link href="/blogs" onClick={handleClick}>
                المقالات
              </Link>
            </li>
          </ul>
        )}

        <div
          className="lg:hidden flex-col gap-1 cursor-pointer flex"
          onClick={handleClick}
        >
          <span className="h-1 w-6 bg-white rounded-lg block"></span>
          <span className="h-1 w-6 bg-white rounded-lg block"></span>
          <span className="h-1 w-6 bg-white rounded-lg block"></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
