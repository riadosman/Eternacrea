import Bg from "./components/Bg.jsx";
import Link from "next/link";
function NotFound() {
  return (
    <div>
      <Bg />
      <div className="flex items-center justify-center min-h-[80vh] flex-col gap-16">
        <h1 className="text-6xl text-center">هذه الصفحة غير موجودة</h1>
        <Link
          href="/"
          className="bg-pink text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300 mt-6"
        >
          عودة الى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
