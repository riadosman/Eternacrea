import img1 from "./assets/blogs/5.png";
import img2 from "./assets/blogs/2.png";
import img3 from "./assets/blogs/3.png";
import img4 from "./assets/blogs/1.png";
import img5 from "./assets/blogs/6.jpg";
import img6 from "./assets/blogs/4.png";
// projects img
import project1 from "./assets/projects/1.png";

export const blogsData = [
  {
    id: 1,
    title: "كيف يمكنك تحسين تجربة المستخدم على موقعك؟",
    description:
      "تحسين تجربة المستخدم على موقعك يعزز فرص التحويل ويزيد من رضا الزوار. اكتشف كيف يمكنك تحسين سرعة الموقع، تجاوبه، وسهولة التنقل بين الصفحات.",
    link: "/blogs/1",
    image: img1,
    content: [
      {
        sectionTitle: "المقدمة",
        text: "تجربة المستخدم هي العامل الأساسي في نجاح أي موقع إلكتروني. إذا كانت تجربة المستخدم سيئة، قد يؤدي ذلك إلى فقدان العملاء المحتملين.",
      },
      {
        sectionTitle: "التفاصيل",
        text: "لتحسين تجربة المستخدم، يجب التركيز على سرعة الموقع، تجاوبه مع مختلف الأجهزة، وتوفير تصميم سهل للتنقل. كل هذه العوامل تساهم في تعزيز رضا الزوار.",
      },
      {
        sectionTitle: "الاستنتاج",
        text: "عندما تقوم بتحسين تجربة المستخدم، ستلاحظ زيادة في التحويلات وتحسن في ولاء العملاء لموقعك.",
      },
      {
        sectionTitle: "المصادر",
        text: [
          {
            name: "Nielsen Norman Group. (n.d.). User Experience Basics.",
            url: "https://www.nngroup.com/articles/definition-user-experience/",
          },
          {
            name: "Usability.gov. (n.d.). User Experience Basics.",
            url: "https://www.usability.gov/what-and-why/user-experience.html",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "أساسيات تحسين محركات البحث (SEO) لموقعك",
    description:
      "تحسين محركات البحث (SEO) يساعد موقعك على الظهور في النتائج الأولى لمحركات البحث، مما يزيد من عدد الزوار ويساهم في نجاح موقعك.",
    link: "/blogs/2",
    image: img2,
    content: [
      {
        sectionTitle: "المقدمة",
        text: "SEO هو المفتاح لتحسين ظهور موقعك في نتائج محركات البحث. يساعدك على جلب المزيد من الزوار المهتمين بخدماتك أو منتجاتك.",
      },
      {
        sectionTitle: "التفاصيل",
        text: "لتحسين SEO، عليك الاهتمام بالكلمات المفتاحية، بناء الروابط، وتحسين سرعة الموقع وتجربة المستخدم.",
      },
      {
        sectionTitle: "الاستنتاج",
        text: "من خلال تطبيق استراتيجيات SEO الصحيحة، يمكنك زيادة عدد الزوار لموقعك وجذب المزيد من العملاء المحتملين.",
      },
      {
        sectionTitle: "المصادر",
        text: [
          {
            name: "Moz. (n.d.). What is SEO?",
            url: "https://moz.com/learn/seo/what-is-seo",
          },
          {
            name: "Search Engine Journal. (n.d.). The Importance of SEO in 2023.",
            url: "https://www.searchenginejournal.com/importance-of-seo/389189/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "كيف يؤثر التصميم المتجاوب على نجاح موقعك؟",
    description:
      "التصميم المتجاوب يسمح لموقعك بالتكيف مع جميع أحجام الشاشات، مما يعزز تجربة المستخدم ويزيد من فعالية الموقع.",
    link: "/blogs/3",
    image: img3,
    content: [
      {
        sectionTitle: "المقدمة",
        text: "مع ازدياد استخدام الأجهزة المحمولة لتصفح الإنترنت، أصبح التصميم المتجاوب ضرورة لكل موقع.",
      },
      {
        sectionTitle: "التفاصيل",
        text: "تصميم موقع يتجاوب مع مختلف أحجام الشاشات يضمن تجربة مستخدم متسقة بغض النظر عن الجهاز المستخدم، مما يزيد من فعالية الموقع.",
      },
      {
        sectionTitle: "الاستنتاج",
        text: "التصميم المتجاوب لا يعزز فقط تجربة المستخدم، بل يحسن أيضاً ترتيب موقعك في نتائج محركات البحث.",
      },
      {
        sectionTitle: "المصادر",
        text: [
          {
            name: "Google. (n.d.). Responsive Web Design Basics.",
            url: "https://developers.google.com/web/fundamentals/design-and-ux/responsive",
          },
          {
            name: "W3Schools. (n.d.). Responsive Web Design.",
            url: "https://www.w3schools.com/css/css_rwd_intro.asp",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "أهمية اختيار الألوان المناسبة في تصميم المواقع",
    description:
      "الألوان تؤثر على الانطباعات الأولية وتجربة المستخدم. اختر الألوان التي تتناسب مع هوية علامتك التجارية وتجذب انتباه الزوار.",
    link: "/blogs/4",
    image: img4,
    content: [
      {
        sectionTitle: "المقدمة",
        text: "تلعب الألوان دورًا كبيرًا في التأثير على مزاج وسلوك المستخدمين. لذلك يجب اختيار الألوان بعناية عند تصميم موقعك.",
      },
      {
        sectionTitle: "التفاصيل",
        text: "كل لون يحمل رسالة معينة. اختر الألوان التي تتناسب مع هوية علامتك التجارية والرسالة التي تريد إيصالها لجمهورك.",
      },
      {
        sectionTitle: "الاستنتاج",
        text: "اختيار الألوان الصحيحة يعزز من تجربة المستخدم ويساعد في ترك انطباع دائم لدى الزوار.",
      },
      {
        sectionTitle: "المصادر",
        text: [
          {
            name: "Color Psychology. (n.d.). The Meaning of Colors.",
            url: "https://www.colorpsychology.org/color-meanings/",
          },
          {
            name: "Adobe Color. (n.d.). Color Theory.",
            url: "https://color.adobe.com/create/color-wheel",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "كيفية زيادة التفاعل مع المحتوى على موقعك",
    description:
      "التفاعل مع المحتوى يزيد من ولاء المستخدمين ويعزز فرص التحويل. استخدم الصور والفيديوهات والعناوين الجذابة لزيادة التفاعل.",
    link: "/blogs/5",
    image: img5,
    content: [
      {
        sectionTitle: "المقدمة",
        text: "التفاعل مع المحتوى يشير إلى مدى اهتمام الزوار بما تقدمه على موقعك. التفاعل الجيد يساهم في بناء علاقة طويلة الأمد مع الزوار.",
      },
      {
        sectionTitle: "التفاصيل",
        text: "استخدم العناوين الجذابة، الصور، والفيديوهات لزيادة التفاعل. قم أيضًا بتشجيع الزوار على التعليق والمشاركة.",
      },
      {
        sectionTitle: "الاستنتاج",
        text: "عندما تزداد نسبة التفاعل مع المحتوى، ستلاحظ تحسينًا في أداء الموقع وزيادة في التحويلات.",
      },
      {
        sectionTitle: "المصادر",
        text: [
          {
            name: "Content Marketing Institute. (n.d.). 5 Ways to Increase Engagement on Your Website.",
            url: "https://contentmarketinginstitute.com/2020/03/increase-engagement-website/",
          },
          {
            name: "HubSpot. (n.d.). 10 Ways to Boost Engagement on Your Website.",
            url: "https://blog.hubspot.com/marketing/website-engagement",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "كيف تزيد من سرعة موقعك لتحسين الأداء",
    description:
      "زيادة سرعة الموقع تعزز تجربة المستخدم وتحسن أداء محركات البحث. اكتشف طرق تحسين الصور وتقليل الأكواد لتحسين سرعة التحميل.",
    link: "/blogs/6",
    image: img6,
    content: [
      {
        sectionTitle: "المقدمة",
        text: "سرعة الموقع هي أحد العوامل الرئيسية التي تؤثر على تجربة المستخدم وأداء الموقع في محركات البحث.",
      },
      {
        sectionTitle: "التفاصيل",
        text: "لتحسين سرعة الموقع، قم بضغط الصور وتقليل الأكواد غير الضرورية، واستخدم شبكة توصيل المحتوى (CDN) لتسريع التحميل.",
      },
      {
        sectionTitle: "الاستنتاج",
        text: "تحسين سرعة تحميل موقعك يمكن أن يؤدي إلى زيادة التفاعل والمبيعات. استثمر الوقت في تحسين سرعة موقعك لتحقيق نتائج أفضل.",
      },
      {
        sectionTitle: "المصادر",
        text: [
          {
            name: "Google. (n.d.). PageSpeed Insights.",
            url: "https://developers.google.com/speed/pagespeed/insights/",
          },
          {
            name: "GTmetrix. (n.d.). Website Performance Testing.",
            url: "https://gtmetrix.com/",
          },
        ],
      },
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 2,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 3,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 4,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 5,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 6,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 7,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
  {
    id: 8,
    title: "Brainwave",
    link: "https://brainwave-live-p.vercel.app/",
    imagelink: project1,
  },
];
