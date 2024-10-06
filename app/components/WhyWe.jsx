import Image from "next/image";
import question from "../assets/question.png";
import Link from "next/link";
function WhyWe() {
  return (
    <div className="min-h-screen container">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">لماذا نحن ؟</h2>
      <div className="flex items-center justify-around mb-10 flex-col-reverse gap-10 lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-10">
          <p className="text-xl leading-8 text-center">
            لأن شركة الأبدية تقدم لك أكثر من مجرد تصميم موقع إلكتروني؛ نحن
            نساعدك على بناء تواجد رقمي متكامل يعكس هوية شركتك ويساهم في زيادة
            مبيعاتك. بفضل خبرتنا في تصميم المواقع التي تستهدف أصحاب الأعمال
            والشركات الناشئة في الوطن العربي وتركيا، نضمن لك حلولًا مبتكرة تجمع
            بين الجاذبية وسهولة الاستخدام، إلى جانب تحسين محركات البحث لضمان
            ظهورك في الصفحات الأولى. نحن نفهم احتياجات عملك ونعمل على تصميم
            تجربة رقمية مخصصة لجذب جمهورك المستهدف وتحقيق نتائج ملموسة.
          </p>
          <Link
            href="/web-design"
            className="bg-pink mx-auto text-white px-6 py-2 rounded-lg hover:shadow-lg transition duration-300 w-fit"
          >
            هيا نبدء الان
          </Link>
        </div>
        <Image
          src={question}
          alt="question"
          width={400}
          height={700}
          className="mx- auto rounded"
        />
      </div>
    </div>
  );
}

export default WhyWe;
