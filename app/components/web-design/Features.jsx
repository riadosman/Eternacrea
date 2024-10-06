"use client";
import {
  FaBolt,
  FaMobileAlt,
  FaLock,
  FaSearch,
  FaCogs,
  FaLifeRing,
  FaNetworkWired,
  FaExpandArrowsAlt,
  FaHeadset,
} from "react-icons/fa"; // استيراد الأيقونات
import { motion } from "framer-motion";
function Features() {
  const features = [
    {
      icon: <FaBolt size={40} className="text-pink" />,
      title: "سرعة التحميل",
      description: "تصفح سريع بدون تأخير أو انتظار.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-pink" />,
      title: "التصميم المتجاوب",
      description: "تصميم متجاوب مع جميع الأجهزة.",
    },
    {
      icon: <FaSearch size={40} className="text-pink" />,
      title: "تحسين محركات البحث (SEO)",
      description: "ظهور في النتائج الأولى لمحركات البحث.",
    },
    {
      icon: <FaLock size={40} className="text-pink" />,
      title: "أمان المعلومات",
      description: "حماية كاملة للبيانات والمعلومات.",
    },
    {
      icon: <FaCogs size={40} className="text-pink" />,
      title: "سهولة التصفح",
      description: "تجربة مستخدم مريحة وسهلة.",
    },
    {
      icon: <FaExpandArrowsAlt size={40} className="text-pink" />,
      title: "قابلية التوسع",
      description: "تصميم مرن يمكن تطويره بسهولة.",
    },
    {
      icon: <FaLifeRing size={40} className="text-pink" />,
      title: "دعم فني مستمر",
      description: "دعم فني متواصل لتحسين الأداء.",
    },
    {
      icon: <FaNetworkWired size={40} className="text-pink" />,
      title: "تكامل مع وسائل التواصل الاجتماعي",
      description: "تكامل مع أشهر منصات التواصل الاجتماعي.",
    },
    {
      icon: <FaHeadset size={40} className="text-pink" />,
      title: "خدمة العملاء",
      description: "خدمة عملاء متاحة 24/7 للمساعدة.",
    },
  ];
  return (
    <div className="container py-5">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-20">مميزات مواقعنا</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition-all text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;
