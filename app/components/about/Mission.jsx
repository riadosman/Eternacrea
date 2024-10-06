import Image from "next/image";
import MissionImg from "../../assets/mission.png";
function Mission() {
  return (
    <div className="container py-5">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">رسالتنا</h2>
      <div className="flex items-center justify-around gap-10 flex-col lg:flex-row">
        <Image
          src={MissionImg}
          alt="MissionImg"
          width={1000}
          height={1000}
          className="lg:w-1/3 rounded"
        />
        <p className="lg:w-1/2 font-bold leading-10 text-center text-xl">
          نحن ملتزمون بمساعدة الشركات الصغيرة والأفراد في تحقيق حضور رقمي مميز
          وقوي، يتماشى مع القيم الدينية والمبادئ الأخلاقية التي نؤمن بها. نسعى
          لتمكين عملائنا من بناء تواجد رقمي متكامل يعزز مكانتهم ويزيد من تأثيرهم
          في السوق الرقمي. نعمل على تحقيق ذلك من خلال تطوير مواقع إلكترونية
          وحملات تسويقية مخصصة على أكبر المنصات العالمية مثل جوجل، مما يساعدهم
          على الوصول إلى جمهور أوسع وزيادة الوعي بخدماتهم ومنتجاتهم. هدفنا هو
          تقديم حلول مبتكرة تتيح للعملاء النجاح والنمو في البيئة الرقمية
          المتطورة، وكل ذلك مع الحفاظ على التزامنا بالقيم والأخلاق في كل خطوة
        </p>
      </div>
    </div>
  );
}

export default Mission;
