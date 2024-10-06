import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bg from "./components/Bg";

export const metadata = {
  title: "ETERNACREA | الابداع الابدي الابتكار الخالد",
  description:
    "مرحبًا بك! في موقعنا الإلكتروني ابدأ الآن بنقل تواجدك الواقعي إلى تواجد رقمي مع شركة الابدية للابداع الابدي و الابتكار الخالد",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <Bg />

        {children}
        <Footer />
      </body>
    </html>
  );
}
