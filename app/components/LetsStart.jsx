import Link from "next/link";
function LetsStart() {
  return (
    <div className="min-h-screen container">
      <hr className="border-2 border-white" />
      <div className="flex text-center items-center justify-center">
        <h2 className="text-6xl font-bold my-10">عرض</h2>
        <span className="text-pink text-6xl font-bold text-center my-10">
          مميز
        </span>
      </div>
      <div className="flex items-center flex-col mb-20">
        <p className="text-xl leading-8">
          شركة الأبدية تقدم خدمة الاستشارة المجانية لأصحاب الأعمال والشركات
          الناشئة الراغبين في معرفة أهمية الموقع الإلكتروني وتأثيره على نجاح
          الأعمال. خلال هذه الجلسة، يتم مناقشة دور الموقع الإلكتروني في تعزيز
          مصداقية الشركة، وجذب العملاء، وزيادة فرص النمو. كما تتطرق الجلسة إلى
          تأثير التواجد الرقمي على تجربة العملاء وثقتهم في العلامة التجارية. من
          أهم النقاط التي تُناقش في الجلسة:
        </p>
        <div className="flex items-center justify-around flex-wrap gap-8 mt-10 flex-col lg:flex-row">
          <div className="border-2 border-white p-4 rounded-lg lg:w-[30%] h-56 text-center">
            <span className="bg-pink rounded-full py-2 px-4">1</span>
            <h1 className="my-6">أهمية التواجد الرقمي</h1>
            <p>
              كيف يساعد الموقع الإلكتروني في زيادة انتشار الشركة وتعزيز وجودها
              في السوق.
            </p>
          </div>
          <div className="border-2 border-white p-4 rounded-lg lg:w-[30%] h-56 text-center">
            <span className="bg-pink rounded-full py-2 px-4">2</span>
            <h1 className="my-6">تأثير الموقع على المبيعات</h1>
            <p>
              كيف يمكن أن يؤدي تصميم موقع احترافي إلى تحسين تجربة المستخدم
              وزيادة فرص التحويل إلى مبيعات.
            </p>
          </div>
          <div className="border-2 border-white p-4 rounded-lg lg:w-[30%] h-56 text-center">
            <span className="bg-pink rounded-full py-2 px-4">3</span>
            <h1 className="my-6">بناء المصداقية</h1>
            <p>
              كيف يعزز الموقع الإلكتروني من ثقة العملاء في العلامة التجارية
              ويساعد في تحسين السمعة.
            </p>
          </div>
          <div className="border-2 border-white p-4 rounded-lg lg:w-[30%] h-56 text-center">
            <span className="bg-pink rounded-full py-2 px-4">4</span>
            <h1 className="my-6">جذب العملاء المستهدفين</h1>
            <p>
              كيفية تصميم الموقع ليخدم احتياجات جمهور الشركة المستهدف ويجذبهم
              بشكل فعال.
            </p>
          </div>
          <div className="p-8 rounded-lg lg:w-[30%] h-56 text-center flex flex-col-reverse items-center gap-10">
            <Link
              href="/web-design"
              className="bg-pink mx-auto text-white px-6 py-2 rounded-lg hover:shadow-lg hover:bg-transparent hover:text-white hover:border-pink border-2 border-transparent transition duration-300 w-fit"
            >
              سجل الان
            </Link>
            <p className="text-xl">
              احصل الان على استشاره فردية مجانية مدتها 30 دقيقة
            </p>
          </div>
          <div className="border-2 border-white p-4 rounded-lg lg:w-[30%] h-56 text-center">
            <span className="bg-pink rounded-full py-2 px-4">5</span>
            <h1 className="my-6">التحسين لمحركات البحث (SEO)</h1>
            <p>
              أهمية تحسين الموقع لمحركات البحث لضمان ظهوره في الصفحات الأولى من
              نتائج البحث وزيادة التفاعل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LetsStart;
