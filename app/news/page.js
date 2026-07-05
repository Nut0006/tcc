"use client";

import { useState } from "react";
import Link from "next/link";
import { newsData } from "../data/schoolData";

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Unique categories list
  const categories = [
    { id: "all", name: "ทั้งหมด" },
    { id: "admission", name: "ข่าวรับสมัคร" },
    { id: "academic", name: "ข่าววิชาการ" },
    { id: "activity", name: "ข่าวกิจกรรม" },
  ];

  // Filter logic
  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2 block font-semibold">TCC Public Relations</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tcc-deep mb-4">ข่าวสารและประชาสัมพันธ์</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light">
          ติดตามข่าวสารความเคลื่อนไหว กิจกรรม วิชาการ และการรับสมัครนักเรียนนักศึกษาของวิทยาลัยพณิชยการธนบุรี
        </p>
      </section>

      {/* Filter and Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-tcc-blue text-white shadow-md shadow-blue-500/10"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="ค้นหาหัวข้อข่าวสาร..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tcc-blue focus:border-transparent transition-all"
            />
            {/* Search Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* News Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-tcc-blue text-white text-xs font-bold rounded-full shadow-sm">
                    {news.categoryName}
                  </span>
                </div>

                {/* News Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-semibold block mb-2">{news.date}</span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-tcc-blue transition-colors duration-200 line-clamp-2 mb-3">
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
                      <span>อ่านเพิ่มเติม</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-16 border border-slate-100 text-center text-slate-500 shadow-sm max-w-lg mx-auto">
            <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3 className="text-lg font-bold text-slate-700 mb-1">ไม่พบข่าวสารที่ค้นหา</h3>
            <p className="text-sm text-slate-400">กรุณาลองเปลี่ยนคำค้นหา หรือเปลี่ยนแท็บประเภทข่าว</p>
          </div>
        )}
      </section>
    </main>
  );
}
