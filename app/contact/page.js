"use client";

import { useState } from "react";
import { contactInfo } from "../data/schoolData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Simulate API request submission
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        error: null,
      });
      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2 block font-semibold">TCC Contact Center</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tcc-deep mb-4">ติดต่อเรา</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light">
          หากมีข้อสงสัยเกี่ยวกับการรับสมัครเรียน หลักสูตรการสอน หรือต้องการติดต่อประสานงานวิทยาลัย สามารถส่งข้อความหรือโทรสอบถามได้โดยตรง
        </p>
      </section>

      {/* Main Grid: Form, Info, and Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Info and Form (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Contact Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address detail */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 text-tcc-blue flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">ที่ตั้งวิทยาลัย</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Phones details */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">เบอร์โทรศัพท์</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light mb-1">
                    โทร: {contactInfo.phones.join(", ")}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    แฟกซ์: {contactInfo.fax}
                  </p>
                </div>
              </div>

              {/* Email details */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-50 text-tcc-gold flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">อีเมลติดต่อ</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-tcc-blue hover:underline text-xs sm:text-sm leading-relaxed">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Social Channels details */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 10.742l-5.12 1.63a1 1 0 00.32 1.942l5.12-1.63a1 1 0 00-.32-1.942zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm0-4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">โซเชียลมีเดีย</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light mb-1">
                    FB: {contactInfo.facebook}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    YT: {contactInfo.youtube}
                  </p>
                </div>
              </div>

            </div>

            {/* Message Submission Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-tcc-deep mb-6">ส่งข้อความถึงวิทยาลัย</h2>
              
              {status.success && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-lg flex items-center space-x-2 animate-bounce">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>ส่งข้อความสำเร็จ! ขอบคุณสำหรับความสนใจ ทางวิทยาลัยจะตอบกลับโดยเร็วที่สุด</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">ชื่อ-นามสกุล</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="สมชาย ใจดี"
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tcc-blue focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">เบอร์โทรศัพท์</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="089-XXXXXXX"
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tcc-blue focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">อีเมลติดต่อ</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="somchai.j@example.com"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tcc-blue focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">เรื่องที่ต้องการติดต่อ</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="สอบถามเกี่ยวกับการรับสมัครนักศึกษาใหม่ 2570"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tcc-blue focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">รายละเอียดข้อความ</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="พิมพ์ข้อความที่ต้องการส่งต่อถึงงานธุรการ/งานทะเบียนวิทยาลัย..."
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-tcc-blue focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-3 rounded-lg text-sm font-bold text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 ${
                    status.submitting
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-tcc-deep to-tcc-blue hover:from-tcc-blue hover:to-tcc-deep"
                  }`}
                >
                  {status.submitting ? (
                    <>
                      {/* Loading spinner */}
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>กำลังส่งข้อความ...</span>
                    </>
                  ) : (
                    <span>ส่งข้อความ</span>
                  )}
                </button>
              </form>
            </div>

          </div>
          
          {/* Column 2: Maps Embed (5 columns) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-lg font-bold text-tcc-deep pb-2 border-b border-slate-100">แผนที่วิทยาลัย</h2>
            
            {/* Responsive Map wrapper */}
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-200 w-full h-[400px] sm:h-[500px] lg:h-[580px]">
              <iframe
                src={contactInfo.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="วิทยาลัยพณิชยการธนบุรี"
                className="absolute inset-0"
              ></iframe>
            </div>
            
            <p className="text-xs text-slate-400 font-semibold text-center italic">
              * ข้อมูลตำแหน่งอิงตามระบบภูมิศาสตร์ Google Maps
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
