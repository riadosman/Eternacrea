"use client";
import { useState } from "react";

function PricingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const plans = [
    { name: "الباقة الأساسية", price: 100 },
    { name: "الباقة المتقدمة", price: 200 },
    { name: "الباقة الاحترافية", price: 500 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // يمكنك هنا معالجة البيانات المرسلة أو حفظها
    console.log("تم إرسال النموذج:", selectedPlan);

    const phoneNumber = "+905528962241"; // استبدل برقمك

    // نص الرسالة المكون من البيانات المدخلة
    const message = `تفاصيل العميل:\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالباقة المختارة: ${selectedPlan}`;

    // ترميز النص لتضمينه في الرابط
    const encodedMessage = encodeURIComponent(message);

    // إنشاء رابط WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // فتح الرابط في نافذة جديدة
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="text-white py-20 container">
      <hr className="border-2 border-white" />
      <h2 className="text-4xl font-bold text-center my-12">
        اختر الباقة المناسبة وأدخل معلوماتك
      </h2>
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* حقل الاسم */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">
              الاسم الكامل
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="أدخل اسمك الكامل"
              required
            />
          </div>

          {/* حقل البريد الإلكتروني */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">
              البريد الإلكتروني
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />
          </div>

          {/* اختيار الباقة */}
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium">
              اختر الباقة
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            >
              <option value="">اختر الباقة</option>
              {plans.map((plan, index) => (
                <option key={index} value={plan.name}>
                  {plan.name} - ${plan.price}
                </option>
              ))}
            </select>
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="w-full bg-pink my-4  text-white py-2 px-4 rounded-lg font-semibold hover:bg-transparent hover:border-pink border-2 border-transparent transition-colors"
          >
            إرسال البيانات
          </button>
        </form>
      </div>
    </div>
  );
}

export default PricingForm;
