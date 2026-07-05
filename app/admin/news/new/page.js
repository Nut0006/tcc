"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default function NewNewsPage() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("admission");
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("กรุณาเลือกไฟล์รูปภาพเท่านั้น");
        setImageFile(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("ขนาดรูปภาพต้องไม่เกิน 5MB");
        setImageFile(null);
        return;
      }
      setError("");
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      setError("กรุณาเลือกรูปภาพประชาสัมพันธ์");
      return;
    }

    setLoading(true);
    setError("");
    setUploadProgress("กำลังอัปโหลดรูปภาพ...");

    try {
      // 1. Upload image to Supabase Storage
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
      const filePath = `news/${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from("news-images")
        .upload(filePath, imageFile);

      if (uploadError) {
        throw new Error(`อัปโหลดรูปภาพล้มเหลว: ${uploadError.message}`);
      }

      setUploadProgress("อัปโหลดสำเร็จ กำลังดึงลิงก์รูปภาพ...");
      
      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from("news-images")
        .getPublicUrl(filePath);

      setUploadProgress("กำลังบันทึกข้อมูลข่าวสารลงฐานข้อมูล...");

      // 3. Insert news data to database
      const { error: insertError } = await supabase.from("news").insert([
        {
          title,
          summary,
          content,
          category,
          featured,
          image_url: publicUrl,
          views: 0
        }
      ]);

      if (insertError) {
        throw new Error(`บันทึกข้อมูลล้มเหลว: ${insertError.message}`);
      }

      setUploadProgress("บันทึกสำเร็จ เรียบร้อย!");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError(err.message || "เกิดข้อผิดพลาดขึ้นในระบบ");
    } finally {
      setLoading(false);
      setUploadProgress("");
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex-grow w-full">
      {/* Navigation and Title */}
      <div className="mb-8 flex items-center space-x-2 text-xs sm:text-sm text-slate-400">
        <Link href="/admin" className="hover:text-white transition-colors">แดชบอร์ด</Link>
        <span>/</span>
        <span className="text-slate-300">เขียนข่าวสารใหม่</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-tcc-gold text-xs font-bold uppercase tracking-wider block mb-1">Create Post</span>
          <h1 className="text-3xl font-extrabold text-white">เขียนข่าวประชาสัมพันธ์ใหม่</h1>
        </div>
        <Link
          href="/admin"
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-xs font-bold rounded-lg transition-all duration-200 self-start"
        >
          ← ย้อนกลับ
        </Link>
      </div>

      {/* Form Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
        
        {error && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs sm:text-sm flex items-center space-x-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {uploadProgress && (
          <div className="mb-6 p-4 bg-[#0066cc]/10 border border-[#0066cc]/20 rounded-xl text-slate-300 text-xs sm:text-sm flex items-center space-x-3">
            {/* Spinning Indicator */}
            <svg className="animate-spin h-5 w-5 text-tcc-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="font-light">{uploadProgress}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Grid Layout fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Category Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">หมวดหมู่ข่าวสาร</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
              >
                <option value="admission">ข่าวรับสมัคร</option>
                <option value="academic">ข่าววิชาการ</option>
                <option value="activity">ข่าวกิจกรรม</option>
              </select>
            </div>

            {/* Featured news switch */}
            <div className="flex items-center md:pt-8">
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-850 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0066cc] peer-checked:after:bg-white relative"></div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">กำหนดให้เป็นข่าวเด่นหน้าแรก</span>
              </label>
            </div>

          </div>

          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">หัวข้อข่าวประชาสัมพันธ์</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="กรอกหัวข้อข่าวสารหลัก..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
            />
          </div>

          {/* Summary Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">รายละเอียดแบบย่อ (สำหรับแสดงในการ์ดหน้ารวม)</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
              rows={3}
              placeholder="กรอกรายละเอียดสั้นๆ เพื่อให้ผู้อ่านเข้าใจโครงเรื่องข่าวโดยย่อ..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Content Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">เนื้อหาข่าวประชาสัมพันธ์ (Content)</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={8}
              placeholder="ระบุเนื้อหารายละเอียดข่าวอย่างละเอียด..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:border-transparent transition-all"
            />
          </div>

          {/* Image Upload Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">รูปภาพประกอบข่าว (ภาพสไลด์/หน้าปก)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-800 border-dashed rounded-xl bg-slate-950/50 hover:bg-slate-950 hover:border-slate-700 transition-all">
              <div className="space-y-1 text-center">
                {imageFile ? (
                  <div className="flex flex-col items-center space-y-2">
                    <svg className="mx-auto h-12 w-12 text-[#eab308]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-semibold text-white">{imageFile.name}</span>
                    <span className="text-xs text-slate-400">{(imageFile.size / 1024 / 1024).toFixed(2)} MB</span>
                    <button
                      type="button"
                      onClick={() => setImageFile(null)}
                      className="text-xs text-rose-400 hover:text-rose-300 hover:underline"
                    >
                      ล้างรูปภาพเพื่อเปลี่ยนใหม่
                    </button>
                  </div>
                ) : (
                  <>
                    <svg className="mx-auto h-12 w-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="flex text-sm text-slate-400">
                      <label className="relative cursor-pointer bg-slate-900 rounded-md font-semibold text-tcc-gold hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0066cc] px-2 py-0.5 border border-slate-700">
                        <span>อัปโหลดรูปภาพ</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                      </label>
                      <p className="pl-1 pt-0.5">หรือ ลากรูปภาพมาวางที่นี่</p>
                    </div>
                    <p className="text-xs text-slate-500">รองรับไฟล์ JPG, PNG, WEBP ขนาดไม่เกิน 5MB</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-800">
            <Link
              href="/admin"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 text-sm font-bold rounded-xl text-center transition-all cursor-pointer"
            >
              ยกเลิก
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-tcc-gold to-yellow-500 hover:from-yellow-500 hover:to-tcc-gold text-slate-900 text-sm font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center space-x-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>กำลังดำเนินการ...</span>
                </>
              ) : (
                <span>บันทึกและเผยแพร่ข่าว</span>
              )}
            </button>
          </div>

        </form>

      </div>
    </main>
  );
}
