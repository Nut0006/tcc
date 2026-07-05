import Link from "next/link";
import { newsData, shortcuts } from "./data/schoolData";

// Icon Helper Component
function ShortcutIcon({ icon }) {
  const baseClass = "w-8 h-8 text-white";
  switch (icon) {
    case "GraduationCap":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    case "Cpu":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case "ClipboardCheck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );
    case "BookOpen":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "Video":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <path d="m22 8-6 4 6 4V8Z" />
          <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
      );
    case "Building":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M9 22V12h6v10M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        </svg>
      );
  }
}

export default function Home() {
  // Filter featured news
  const featuredNews = newsData.filter((item) => item.featured).slice(0, 3);

  return (
    <main className="flex-grow">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0f2d59] via-[#1e4b8a] to-[#0066cc] text-white py-24 sm:py-32 overflow-hidden">
        {/* Decorative background grid and shapes */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tcc-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Headline Details */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center self-center lg:self-start px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/15 text-tcc-gold border border-white/10 tracking-widest uppercase">
                ยินดีต้อนรับสู่รั้ว ฟ้า-ขาว
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                วิทยาลัยพณิชยการธนบุรี
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 max-w-2xl font-light">
                สถาบันการศึกษาอาชีวศึกษาชั้นนำด้านการจัดการ บริหารธุรกิจ และเทคโนโลยีดิจิทัล มุ่งสร้างมืออาชีพที่ตรงต่อเวลา มีหน้าที่ และรับผิดชอบต่อสังคม
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/departments"
                  className="px-8 py-3.5 bg-gradient-to-r from-tcc-gold to-yellow-500 hover:from-yellow-500 hover:to-tcc-gold text-slate-900 font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  หลักสูตรที่เปิดสอน
                </Link>
                <Link
                  href="#portals"
                  className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all duration-300"
                >
                  ระบบบริการออนไลน์
                </Link>
              </div>
            </div>

            {/* Visual Emblem Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-8 backdrop-blur-sm shadow-2xl hover:scale-105 transition-all duration-500">
                <svg
                  viewBox="0 0 100 100"
                  className="w-4/5 h-4/5 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
                  <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                  
                  {/* Sails/Wings */}
                  <path d="M50 15 L20 70 L50 60 L80 70 Z" className="text-white opacity-90" />
                  <path d="M50 25 L35 65 L50 58 L65 65 Z" className="fill-tcc-gold" />
                  
                  {/* Wheel / Dharmachakka */}
                  <circle cx="50" cy="80" r="10" stroke="white" strokeWidth="2.5" fill="none" />
                  <line x1="50" y1="70" x2="50" y2="90" stroke="white" strokeWidth="2" />
                  <line x1="40" y1="80" x2="60" y2="80" stroke="white" strokeWidth="2" />
                  <line x1="43" y1="73" x2="57" y2="87" stroke="white" strokeWidth="2" />
                  <line x1="43" y1="87" x2="57" y2="73" stroke="white" strokeWidth="2" />
                  
                  {/* Candle flame */}
                  <path d="M50 5 Q48 10 50 15 Q52 10 50 5 Z" className="fill-tcc-gold animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Grid */}
      <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-4 border-r border-slate-100 last:border-0 max-sm:border-r-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-tcc-deep mb-2">68+ ปี</span>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">ก่อตั้งตั้งแต่ปี พ.ศ. 2500</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 lg:border-r border-slate-100 max-sm:border-r-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-tcc-blue mb-2">2,000+ คน</span>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">นักเรียนนักศึกษาในปัจจุบัน</span>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-r border-slate-100 last:border-0 max-sm:border-r-0">
            <span className="text-3xl sm:text-4xl font-extrabold text-tcc-deep mb-2">150+ ท่าน</span>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">คณะครูและบุคลากรวิชาชีพ</span>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-tcc-blue mb-2">100%</span>
            <span className="text-xs sm:text-sm text-slate-500 font-semibold">เน้นฝึกทักษะอาชีพคู่คุณธรรม</span>
          </div>
        </div>
      </section>

      {/* 3. Featured News Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2">Public Relations</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-tcc-deep relative pb-4">
            ข่าวประชาสัมพันธ์เด่น
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-tcc-gold rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* News Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-tcc-blue text-white text-xs font-bold rounded-full">
                  {news.categoryName}
                </span>
              </div>

              {/* News Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block mb-2">{news.date}</span>
                  <h3 className="text-lg font-bold text-slate-800 line-clamp-2 hover:text-tcc-blue transition-colors mb-3">
                    <Link href={`/news/${news.id}`}>{news.title}</Link>
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">
                    {news.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">เข้าชม {news.views} ครั้ง</span>
                  <Link
                    href={`/news/${news.id}`}
                    className="text-tcc-blue hover:text-tcc-deep font-bold flex items-center space-x-1"
                  >
                    <span>อ่านรายละเอียด</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/news"
            className="px-6 py-3 border-2 border-tcc-blue text-tcc-blue hover:bg-tcc-blue hover:text-white font-bold rounded-lg transition-all duration-300"
          >
            ดูข่าวประชาสัมพันธ์ทั้งหมด
          </Link>
        </div>
      </section>

      {/* 4. Information Portals (Shortcuts) */}
      <section id="portals" className="bg-[#f0f4f8] py-20 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2">Quick Shortcuts</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-tcc-deep relative pb-4">
              ทางลัดระบบสารสนเทศ
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-tcc-gold rounded-full"></span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-xl">
              อำนวยความสะดวกสำหรับนักเรียนนักศึกษา ผู้ปกครอง และครูผู้สอนในการเข้าถึงระบบบริการทางการศึกษาต่างๆ ของวิทยาลัย
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortcuts.map((shortcut) => (
              <a
                key={shortcut.id}
                href={shortcut.url}
                target={shortcut.url.startsWith("http") ? "_blank" : "_self"}
                rel={shortcut.url.startsWith("http") ? "noopener noreferrer" : ""}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start space-x-4 group"
              >
                {/* Colored Icon Badge */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${shortcut.color} flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}>
                  <ShortcutIcon icon={shortcut.icon} />
                </div>
                
                {/* Shortcut details */}
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-800 text-base group-hover:text-tcc-blue transition-colors mb-1">
                    {shortcut.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {shortcut.description}
                  </p>
                  <span className="inline-flex items-center text-xs text-tcc-blue font-bold mt-3 group-hover:translate-x-1 transition-transform duration-300">
                    <span>เปิดระบบ</span>
                    <span className="ml-1">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
