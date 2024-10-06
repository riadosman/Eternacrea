import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaHeart,
  FaUsers,
  FaRocket,
  FaSync,
} from "react-icons/fa";

const valuesData = [
  {
    title: "الابتكار",
    description: "نسعى دائمًا لتقديم حلول مبتكرة تلبي احتياجات عملائنا.",
    icon: <FaLightbulb />,
  },
  {
    title: "الجودة",
    description: "نركز على تقديم منتجات عالية الجودة تحقق رضا العملاء.",
    icon: <FaShieldAlt />,
  },
  {
    title: "الشغف",
    description: "كل ما نقوم به ينبع من شغفنا بالتكنولوجيا والبرمجة.",
    icon: <FaHeart />,
  },
  {
    title: "الأمان",
    description: "نأخذ أمان المعلومات على محمل الجد ونطبق أفضل الممارسات.",
    icon: <FaUsers />,
  },
  {
    title: "التعاون",
    description: "نعمل كفريق واحد لضمان تحقيق الأهداف المشتركة.",
    icon: <FaRocket />,
  },
  {
    title: "المرونة",
    description:
      "نتمتع بالقدرة على التكيف مع التغيرات وتلبية احتياجات العملاء.",
    icon: <FaSync />,
  },
];

function Values() {
  return (
    <div className="container my-10">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">قيمنا</h2>
      <div className="grid lg:grid-cols-2  grid-cols-1 gap-8 py-10">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fadeIn"
          >
            <div className="text-4xl text-[#FB01DC] ml-4">{value.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-white">{value.title}</h3>
              <p className="text-gray-300 mt-1">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;
