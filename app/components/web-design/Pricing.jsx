import { FaCheck } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      name: "الباقة الأساسية",
      price: 100,
      features: [
        "تصميم موقع بصفحة واحدة",
        "تحسين محركات البحث (SEO)",
        "دعم لمدة شهر واحد",
        "توافق مع جميع الأجهزة",
        "استضافة مجانية لمدة سنة",
      ],
      popular: false,
    },
    {
      name: "الباقة المتقدمة",
      price: 200,
      features: [
        "تصميم موقع من 3 صفحات",
        "تحسين محركات البحث (SEO)",
        "دعم لمدة 3 أشهر",
        "توافق كامل مع الأجهزة المختلفة",
        "استضافة مجانية لمدة سنة",
        "دمج مع وسائل التواصل الاجتماعي",
      ],
      popular: true,
    },
    {
      name: "الباقة الاحترافية",
      price: 500,
      features: [
        "تصميم موقع من 5 صفحات أو أكثر",
        "تحسين محركات البحث (SEO)",
        "دعم لمدة 6 أشهر",
        "توافق كامل مع جميع الأجهزة",
        "استضافة مجانية لمدة سنتين",
        "دمج متكامل مع وسائل التواصل الاجتماعي",
        "إعداد وإدارة الإعلانات الرقمية",
      ],
      popular: false,
    },
  ];

  return (
    <div className="text-white py-20">
      <hr className="border-2 border-white" />
      <h2 className="text-5xl font-bold text-center my-12">باقات الأسعار</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-8 text-center transition-all transform hover:scale-105 ${
              plan.popular ? " text-white" : " text-white"
            }`}
          >
            {plan.popular && (
              <span className="text-sm uppercase bg-yellow-400 text-black py-1 px-3 rounded-full inline-block mb-4">
                الأكثر شيوعًا
              </span>
            )}
            <h3 className="text-3xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-5xl font-bold mb-4">${plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center justify-center mb-4">
                  <FaCheck className="text-green-400 ml-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink mx-auto cursor-pointer text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg hover:bg-transparent hover:text-white hover:border-pink border-2 border-transparent transition duration-300 w-fit">
              اختر هذه الباقة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
