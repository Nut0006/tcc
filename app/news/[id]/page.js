import Link from "next/link";
import { newsData } from "../../data/schoolData";

// Generate static params for fast build performance
export async function generateStaticParams() {
  return newsData.map((item) => ({
    id: item.id,
  }));
}

export default async function NewsDetailPage({ params }) {
  const { id } = await params;
  const newsItem = newsData.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <main className="min-h-screen bg-slate-50 py-20 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center max-w-md">
          <svg className="w-16 h-16 text-rose-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-bold text-slate-800 mb-2">ไม่พบข่าวประชาสัมพันธ์</h2>
          <p className="text-slate-500 text-sm mb-6">ข่าวสารที่คุณต้องการเข้าถึงไม่มีอยู่ในระบบ หรืออาจถูกลบไปแล้ว</p>
          <Link href="/news" className="px-6 py-2.5 bg-tcc-blue text-white font-bold rounded-lg hover:bg-tcc-deep transition-colors">
            กลับหน้าข่าวสาร
          </Link>
        </div>
      </main>
    );
  }

  // Get other news for sidebar (excluding current)
  const otherNews = newsData.filter((item) => item.id !== id).slice(0, 3);

  // Split content by newline to render separate paragraphs
  const paragraphs = newsItem.content.split("\n").filter((p) => p.trim() !== "");

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-tcc-blue">หน้าแรก</Link>
          <span>/</span>
          <Link href="/news" className="hover:text-tcc-blue">ข่าวประชาสัมพันธ์</Link>
          <span>/</span>
          <span className="text-slate-400 truncate max-w-xs sm:max-w-md">{newsItem.title}</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article (8 columns) */}
          <article className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100">
            {/* Category Badge & Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-tcc-blue text-xs font-bold rounded-full border border-blue-100">
                {newsItem.categoryName}
              </span>
              <span className="text-xs text-slate-400 font-semibold">{newsItem.date}</span>
              <span className="text-xs text-slate-400 font-semibold">•</span>
              <span className="text-xs text-slate-400 font-semibold">เข้าชม {newsItem.views} ครั้ง</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight mb-8">
              {newsItem.title}
            </h1>

            {/* Large Cover Image */}
            <div className="relative rounded-xl overflow-hidden shadow-md mb-8 border border-slate-100">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </div>

            {/* News Body Paragraphs */}
            <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              {paragraphs.map((para, index) => (
                <p key={index} className="whitespace-pre-line">
                  {para}
                </p>
              ))}
            </div>

            {/* Social Share & Back buttons */}
            <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/news"
                className="px-6 py-2.5 border border-slate-200 hover:border-tcc-blue text-slate-600 hover:text-tcc-blue text-sm font-bold rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>←</span>
                <span>ย้อนกลับไปหน้าข่าว</span>
              </Link>

              {/* Fake Social Share */}
              <div className="flex items-center space-x-2 text-xs text-slate-400 font-semibold">
                <span>แชร์ข่าวสาร:</span>
                <button className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors">Facebook</button>
                <button className="px-3 py-1.5 bg-slate-100 hover:bg-sky-50 hover:text-sky-500 rounded transition-colors">Line</button>
              </div>
            </div>
          </article>

          {/* Sidebar Other News (4 columns) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-tcc-deep mb-6 pb-2 border-b border-slate-100">
                ข่าวประชาสัมพันธ์อื่น ๆ
              </h3>
              <div className="space-y-6">
                {otherNews.map((news) => (
                  <Link
                    key={news.id}
                    href={`/news/${news.id}`}
                    className="flex space-x-3 group block"
                  >
                    {/* Small image */}
                    <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-slate-100">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Details */}
                    <div className="flex-grow min-w-0">
                      <span className="text-[10px] text-slate-400 font-semibold block mb-1">{news.date}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-tcc-blue transition-colors line-clamp-2 leading-snug">
                        {news.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Admission CTA */}
            <div className="bg-gradient-to-br from-tcc-deep to-tcc-blue text-white rounded-2xl p-6 shadow-md border border-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:15px_15px]"></div>
              <div className="relative z-10">
                <span className="text-tcc-gold text-xs font-bold uppercase tracking-wider block mb-2">Enrollment Open</span>
                <h3 className="text-lg font-bold mb-3">สมัครเรียนออนไลน์</h3>
                <p className="text-slate-200 text-xs leading-relaxed mb-6 font-light">
                  ร่วมเป็นส่วนหนึ่งของครอบครัวฟ้า-ขาว พร้อมรับทักษะวิชาชีพชั้นเลิศด้านบริหารธุรกิจและเทคโนโลยีดิจิทัล
                </p>
                <Link
                  href="/contact"
                  className="block text-center w-full py-2.5 bg-tcc-gold hover:bg-yellow-500 text-slate-900 font-bold text-sm rounded-lg shadow-sm transition-colors"
                >
                  สอบถามการสมัครเรียน
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
