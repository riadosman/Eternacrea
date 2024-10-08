"use client";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ReImage from "../../assets/icons8-whatsapp-96.png";

function Registration() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleWhatsAppSend = () => {
    if (validateForm()) {
      const phoneNumber = "+905528962241"; // Replace with your phone number
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        `Email: ${email}\nMessage: ${message}`
      )}`;
      window.open(url, "_blank");
    }
  };

  const handleGmailSend = () => {
    if (validateForm()) {
      const mailtoLink = `mailto:riyados973@gmail.com?subject=Consultation Request&body=${encodeURIComponent(
        `Email: ${email}\nMessage: ${message}`
      )}`;
      window.location.href = mailtoLink;
    }
  };
  const validateForm = () => {
    if (!email || !message) {
      setError("الرجاء تعبئة البريد الإلكتروني والرسالة قبل الإرسال");
      return false;
    }
    setError(""); // Clear error if the form is valid
    return true;
  };
  return (
    <div className="container py-5">
      <hr className="border-2 border-white" />
      <h2 className="lg:text-6xl text-2xl font-bold text-center my-10">
        احصل الان على استشاره مجانية
      </h2>
      <div className="flex items-center justify-around gap-10 flex-col-reverse lg:flex-row">
        <form className="lg:w-1/3 w-full flex flex-col gap-10">
          <input
            className="bg-transparent border-2 border-pink w-full rounded py-2 px-6 focus:border-purple focus:outline-none"
            type="email"
            placeholder="البريد الاكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="bg-transparent border-2 border-pink w-full rounded py-2 px-6 h-52 focus:border-purple focus:outline-none"
            type="text"
            placeholder="* ملاحظات عن الوقت هل هنالك وقت محدد او موضوع محدد تريدون التكلم فيه"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center justify-around">
            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="bg-pink mx-auto cursor-pointer text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg hover:bg-transparent hover:text-white hover:border-pink border-2 border-transparent transition duration-300 w-fit"
            >
              <FaWhatsapp />
              ارسال عبر واتساب
            </button>
            <button
              type="button"
              onClick={handleGmailSend}
              className="bg-pink mx-auto cursor-pointer text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg hover:bg-transparent hover:text-white hover:border-pink border-2 border-transparent transition duration-300 w-fit"
            >
              <SiGmail />
              ارسال عبر Gmail
            </button>
          </div>
        </form>
        <Image
          src={ReImage}
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
