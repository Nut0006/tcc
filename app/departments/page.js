"use client";

import { useState } from "react";
import { departmentsData } from "../data/schoolData";

// Major Icon Component
function MajorIcon({ id }) {
  const baseClass = "w-6 h-6";
  // Determine icon based on major id keywords
  if (id.includes("acc")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    );
  } else if (id.includes("mkt")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  } else if (id.includes("com") || id.includes("db")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  } else if (id.includes("retail")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    );
  } else if (id.includes("tour")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    );
  } else if (id.includes("log")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={baseClass}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    );
  }
}

export default function DepartmentsPage() {
  const [level, setLevel] = useState("pvc"); // pvc = ปวช., pvs = ปวส.

  const activeLevelData = departmentsData[level];

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2 block font-semibold">TCC Curriculum</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tcc-deep mb-4">หลักสูตรที่เปิดสอน</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light">
          มุ่งเน้นความเป็นเลิศทางวิชาชีพ พัฒนาความรู้และเสริมสร้างความชำนาญตามมาตรฐานสากลเพื่อป้อนสู่ความต้องการในโลกการค้าและเทคโนโลยีสมัยใหม่
        </p>
      </section>

      {/* Curriculum Level Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-center">
        <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm flex space-x-2">
          <button
            onClick={() => setLevel("pvc")}
            className={`px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center space-x-2 ${
              level === "pvc"
                ? "bg-tcc-blue text-white shadow-md shadow-blue-500/10"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <span>ระดับ ปวช.</span>
            <span className="text-xs opacity-75 font-normal">(ประกาศนียบัตรวิชาชีพ)</span>
          </button>
          
          <button
            onClick={() => setLevel("pvs")}
            className={`px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center space-x-2 ${
              level === "pvs"
                ? "bg-tcc-blue text-white shadow-md shadow-blue-500/10"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <span>ระดับ ปวส.</span>
            <span className="text-xs opacity-75 font-normal">(ประกาศนียบัตรวิชาชีพชั้นสูง)</span>
          </button>
        </div>
      </section>

      {/* Level Description Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center sm:justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-tcc-deep mb-2">{activeLevelData.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              {activeLevelData.description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="px-4 py-2 bg-tcc-deep text-white font-bold text-xs rounded-full uppercase tracking-wider">
              {level === "pvc" ? "หลักสูตร 3 ปี" : "หลักสูตร 2 ปี"}
            </span>
          </div>
        </div>
      </section>

      {/* Majors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeLevelData.majors.map((major) => (
            <div
              key={major.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top Banner Indicator */}
              <div className={`h-1.5 ${major.badgeColor}`}></div>
              
              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Icon Header */}
                  <div className={`w-12 h-12 rounded-xl ${major.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <MajorIcon id={major.id} />
                  </div>
                  
                  {/* Major Title */}
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-tcc-blue transition-colors">
                    {major.name}
                  </h3>
                  
                  {/* Learning Concept */}
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">
                    {major.concept}
                  </p>
                </div>

                {/* Career Opportunities Sub-Section */}
                <div className="pt-5 border-t border-slate-50">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    โอกาสประกอบอาชีพในอนาคต:
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-relaxed">
                    {major.career}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
