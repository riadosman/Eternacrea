import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import facebook from "../assets/icons/icons8-facebook-50.png";
import instagram from "../assets/icons/icons8-instagram-50.png";
import twitterx from "../assets/icons/icons8-twitterx-50.png";
import whatsapp from "../assets/icons/icons8-whatsapp-50.png";

function Footer() {
  return (
    <div className="bg-purple py-10">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-around">
        <div className="flex flex-col gap-5 mb-8 lg:mb-0">
          <Link href="/" className="flex items-center flex-row-reverse gap-3">
            <Image src={logo} alt="logo" width={70} height={50} />
            <p className="text-lg font-bold">EternaCrea</p>
          </Link>
          <p className="text-sm">الابداع الابدي ,الابتكار الخالد</p>
        </div>

        <ul className="flex flex-col gap-3 mb-8 lg:mb-0">
          <li>
            <Link href="/" className="text-sm hover:text-pink-500">
              الصفحة الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm hover:text-pink-500">
              من نحن ؟
            </Link>
          </li>
          <li>
            <Link href="/web-design" className="text-sm hover:text-pink-500">
              تصميم الموقع
            </Link>
          </li>
            <li>
            <Link href="/blogs">المقالات</Link>
          </li>
        </ul>

        <ul className="flex flex-col gap-3">
          <li>
            <Link
              href="https://www.facebook.com/profile.php?id=61566863579586"
              className="flex items-center gap-2 text-sm hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={facebook} alt="facebook" width={40} height={40} />
              <p>Facebook</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/eterna_crea/"
              className="flex items-center gap-2 text-sm hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={instagram} alt="instagram" width={40} height={40} />
              <p>Instagram</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/ETERNA_CREA"
              className="flex items-center gap-2 text-sm hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={twitterx} alt="twitterx" width={40} height={40} />
              <p>TwitterX</p>
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/+905528962241" // استبدل "yourPhoneNumber" برقم واتساب الخاص بك مع رمز البلد
              className="flex items-center gap-2 text-sm hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={whatsapp} alt="whatsapp" width={40} height={40} />
              <p>WhatsApp</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
