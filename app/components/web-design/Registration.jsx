import Image from "next/image";
import Whatsapp from "../../assets/icons8-whatsapp-96.png";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Registration() {
  return (
    <div className="container py-5">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">
        احصل الان على استشاره مجانية
      </h2>
      <div className="flex items-center justify-around gap-10 flex-col-reverse lg:flex-row">
        <form className="lg:w-1/3 w-full flex flex-col gap-10">
          <input
            className="bg-transparent border-2 border-pink w-full rounded py-2 px-6 focus:border-purple focus:outline-none"
            type="text"
            placeholder="البريد الاكتروني"
          />
          <textarea
            className="bg-transparent border-2 border-pink w-full rounded py-2 px-6 h-52 focus:border-purple focus:outline-none"
            type="text"
            placeholder="* ملاحظات عن الوقت هل هنالك وقت محدد او موضوع محدد تريدون التكلم فيه"
          />
          <div className="flex items-center justify-around">
            <button
              type="submit"
              className="bg-pink mx-auto cursor-pointer text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg hover:bg-transparent hover:text-white hover:border-pink border-2 border-transparent transition duration-300 w-fit"
            >
              <FaWhatsapp />
              ارسال
            </button>
            <button
              type="submit"
              className="bg-pink mx-auto cursor-pointer text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg hover:bg-transparent hover:text-white hover:border-pink border-2 border-transparent transition duration-300 w-fit"
            >
              <SiGmail />
              ارسال
            </button>
          </div>
        </form>
        <Image
          src={Whatsapp}
          alt="Whatsapp"
          width={1000}
          height={1000}
          className="lg:w-1/3 w-1/2 rounded"
        />
      </div>
    </div>
  );
}

export default Registration;
