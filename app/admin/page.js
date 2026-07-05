"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { getCategoryName, formatDate } from "../lib/utils";

export default function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [news, setNews] = useState([]);
  const [newsError, setNewsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null); // stores news ID when updating/deleting
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      setLoading(true);
      
      // Get session user
      const { data: { session: activeSession } } = await supabase.auth.getSession();
      setSession(activeSession);

      if (activeSession) {
        await fetchNewsList();
      }
      setLoading(false);
    };

    fetchAdminData();
  }, []);

  const fetchNewsList = async () => {
    try {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching news:", error);
        setNewsError(true);
      } else {
        setNews(data || []);
        setNewsError(false);
      }
    } catch (err) {
      setNewsError(true);
    }
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`คุณต้องการลบข่าว "${title}" ใช่หรือไม่?`)) return;

    setActionLoading(id);
    
    // Optimistic UI update: remove from state immediately
    const previousNews = [...news];
    setNews(news.filter(item => item.id !== id));

    try {
      const { error } = await supabase
        .from("news")
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }
      showToast("ลบข่าวประชาสัมพันธ์เรียบร้อยแล้ว");
    } catch (err) {
      console.error("Error deleting news:", err);
      // Revert state if delete fails
      setNews(previousNews);
      alert("เกิดข้อผิดพลาดในการลบข่าว กรุณาลองใหม่อีกครั้ง");
    } finally {
      setActionLoading(null);
    }
  };

  const handleToggleFeatured = async (id, currentFeatured) => {
    setActionLoading(id);
    
    // Optimistic UI update
    setNews(news.map(item => item.id === id ? { ...item, featured: !currentFeatured } : item));

    try {
      const { error } = await supabase
        .from("news")
        .update({ featured: !currentFeatured })
        .eq("id", id);

      if (error) {
        throw error;
      }
      showToast("อัปเดตสถานะข่าวเด่นเรียบร้อยแล้ว");
    } catch (err) {
      console.error("Error toggling featured status:", err);
      // Revert state
      setNews(news.map(item => item.id === id ? { ...item, featured: currentFeatured } : item));
      alert("เกิดข้อผิดพลาดในการอัปเดตสถานะข่าวแนะนำ");
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 p-4 bg-[#0066cc] text-white rounded-xl shadow-2xl flex items-center space-x-2 border border-white/20 animate-fade-in-up">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <section className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-tcc-gold text-xs font-bold uppercase tracking-wider block mb-1">Control Panel</span>
          <h1 className="text-3xl font-extrabold text-white">จัดการข่าวประชาสัมพันธ์</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/news/new"
            className="px-5 py-3 bg-gradient-to-r from-tcc-gold to-yellow-500 hover:from-yellow-500 hover:to-tcc-gold text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-sm flex items-center space-x-1.5 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            <span>เขียนข่าวใหม่</span>
          </Link>
        </div>
      </section>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: News Management Table (8 Columns) */}
        <div className="lg:col-span-12 space-y-8">
          
          {/* Database Setup Notice if table not found */}
          {newsError && !loading && (
            <div className="p-6 bg-rose-950/40 border border-rose-900/60 rounded-2xl text-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-rose-300 text-sm sm:text-base">ตรวจพบข้อผิดพลาดเกี่ยวกับฐานข้อมูล (Supabase)</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  ระบบตรวจไม่พบตาราง `news` ในโครงการ Supabase กรุณาเข้าสู่ Supabase Dashboard และสร้างตารางข่าวสารโดยการรันคำสั่ง SQL ที่กำหนดไว้ในหัวข้อที่ 1 ของคู่มือ [brief.md](file:///c:/Users/424-020/Desktop/TCCTeat/tcc/brief.md#L211)
                </p>
              </div>
            </div>
          )}

          {/* News Table Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h3 className="text-lg font-bold text-white">รายการข่าวสารบนระบบ</h3>
              <span className="text-xs text-slate-400 font-light bg-slate-950 px-3 py-1 rounded-full border border-slate-850">
                ทั้งหมด {news.length} รายการ
              </span>
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center space-y-4">
                  {/* Spinning loader */}
                  <svg className="animate-spin h-8 w-8 text-tcc-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-sm font-light">กำลังดึงข้อมูลรายการข่าวสาร...</p>
                </div>
              ) : news.length === 0 ? (
                <div className="p-16 text-center text-slate-500">
                  <svg className="w-16 h-16 text-slate-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <h4 className="text-white font-bold mb-1">ยังไม่มีข้อมูลข่าวประชาสัมพันธ์ในระบบ</h4>
                  <p className="text-xs text-slate-500 mb-6 font-light max-w-sm mx-auto">ท่านสามารถเริ่มเขียนข่าวแรกของโรงเรียนได้ทันทีโดยการคลิกปุ่มด้านล่างนี้</p>
                  <Link
                    href="/admin/news/new"
                    className="inline-flex px-5 py-2.5 bg-[#0066cc] hover:bg-[#0f2d59] text-white text-xs font-bold rounded-lg transition-colors border border-white/5"
                  >
                    + เขียนข่าวประชาสัมพันธ์ข่าวแรก
                  </Link>
                </div>
              ) : (
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-950/40 border-b border-slate-800 text-slate-400 font-semibold text-xs tracking-wider uppercase">
                      <th className="p-4 w-24">รูปปก</th>
                      <th className="p-4">หัวข้อข่าวประชาสัมพันธ์</th>
                      <th className="p-4 w-32">หมวดหมู่</th>
                      <th className="p-4 w-36 text-center">ข่าวแนะนำเด่น</th>
                      <th className="p-4 w-36">วันที่โพสต์</th>
                      <th className="p-4 w-32 text-center">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850">
                    {news.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-850/30 transition-colors">
                        {/* Thumbnail */}
                        <td className="p-4">
                          <div className="w-16 h-10 rounded overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
                            {item.image_url ? (
                              <img
                                src={item.image_url}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-[10px] text-slate-600 font-light">ไม่มีรูป</span>
                            )}
                          </div>
                        </td>

                        {/* Title */}
                        <td className="p-4">
                          <div className="flex flex-col space-y-1">
                            <span className="font-bold text-slate-200 line-clamp-1 leading-snug" title={item.title}>
                              {item.title}
                            </span>
                            <span className="text-slate-500 text-xs font-light line-clamp-1">
                              {item.summary || "ไม่มีคำโปรยประกอบ..."}
                            </span>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="p-4">
                          <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full ${
                            item.category === "admission" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                            item.category === "academic" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                            "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                          }`}>
                            {getCategoryName(item.category)}
                          </span>
                        </td>

                        {/* Featured Switch */}
                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleToggleFeatured(item.id, item.featured)}
                            disabled={actionLoading === item.id}
                            className={`mx-auto px-2.5 py-1 text-[10px] font-bold rounded-full cursor-pointer transition-all ${
                              item.featured
                                ? "bg-tcc-gold/15 text-tcc-gold border border-tcc-gold/30 hover:bg-tcc-gold/25"
                                : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-white"
                            }`}
                          >
                            {item.featured ? "★ เด่นหน้าแรก" : "☆ ทั่วไป"}
                          </button>
                        </td>

                        {/* Date */}
                        <td className="p-4 text-slate-400 text-xs">
                          {formatDate(item.created_at)}
                        </td>

                        {/* Actions */}
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete(item.id, item.title)}
                              disabled={actionLoading === item.id}
                              className="p-1.5 bg-slate-800 hover:bg-rose-600/20 hover:text-rose-400 border border-slate-700 hover:border-rose-500/30 rounded-lg text-slate-400 transition-all cursor-pointer"
                              title="ลบข่าวสาร"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
