import Image from "next/image";
import OurvisionImg from "../../assets/SP-Jain-Vision.webp";
function OurVision() {
  return (
    <div className="container py-5">
      <hr className="border-2 border-white" />
      <h2 className="text-6xl font-bold text-center my-10">رؤيتنا</h2>
      <div className="flex items-center justify-around gap-10 flex-col-reverse lg:flex-row">
        <p className="lg:w-1/2 font-bold leading-10 text-center text-xl">
          نسعى إلى تمكين الشركات من الانتقال من مجرد فكرة إلى حقيقة ملموسة على
          الإنترنت، بدون الحاجة إلى تواجد فعلي في العالم الواقعي. نهدف إلى إنشاء
          حضور رقمي متكامل يمكن الشركات من النمو والتوسع باستخدام الإبداع والجهد
          الفكري فقط، مما يتيح لها تحقيق نجاحات ملموسة دون أي عناء بدني أو
          استثمارات في البنية التحتية التقليدية
        </p>
        <Image
          src={OurvisionImg}
          alt="OurvisionImg"
          width={1000}
          height={1000}
          className="lg:w-1/3 rounded"
        />
      </div>
    </div>
  );
}

export default OurVision;
