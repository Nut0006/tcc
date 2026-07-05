import { Anuphan } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const anuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "วิทยาลัยพณิชยการธนบุรี - Thonburi Commercial College",
  description: "เว็บไซต์อย่างเป็นทางการ วิทยาลัยพณิชยการธนบุรี - สถาบันอาชีวศึกษาชั้นนำด้านบริหารธุรกิจและเทคโนโลยีระดับประเทศ",
  keywords: "วิทยาลัยพณิชยการธนบุรี, พณิชยการธนบุรี, TCC, เรียนต่อปวช, เรียนต่อปวส, บริหารธุรกิจ, บางแวก, จรัญ13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${anuphan.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <Navbar />
        <div className="flex-grow pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
