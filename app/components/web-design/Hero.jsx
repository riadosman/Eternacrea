"use client";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="min-h-[80vh] contianer flex flex-col items-center justify-center">
      <motion.h1
        className="lg:text-7xl text-2xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }} // Start hidden and move up
        animate={{ opacity: 1, y: 0 }} // Animate to visible and in position
        transition={{ duration: 0.8 }} // Animation duration
      >
        تصميم الموقع الالكتروني
      </motion.h1>
      <motion.p
        className="lg:text-xl text-md text-center max-w-xl my-5 mx-5"
        initial={{ opacity: 0, x: 50 }} // Start hidden and slide from right
        animate={{ opacity: 1, x: 0 }} // Animate to visible and in position
        transition={{ duration: 1.0, delay: 0.3 }} // Delay the animation a bit
      >
        نحن نقدم لك استشارة مجانية نناقش فيها أهم الفوائد التي سيحققها عملك
        التجاري عند إنشاء موقع إلكتروني مخصص. خلال الجلسة، سنتناول النقاط
        الرئيسية التي ستعزز تواجدك الرقمي وتزيد من نمو مبيعاتك. إذا كان لديك أي
        استفسارات أو مواضيع ذات صلة، نحن جاهزون لتقديم الإجابات والمشورة
        المناسبة لتحسين استراتيجيتك الرقمية.
      </motion.p>
    </div>
  );
}

export default Hero;
