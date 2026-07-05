"use client";

import { useState } from "react";
import { executiveData, teacherDepartments } from "../data/schoolData";

export default function PersonnelPage() {
  const [activeTab, setActiveTab] = useState("academic");

  const tabKeys = Object.keys(teacherDepartments);

  return (
    <main className="min-h-screen bg-slate-50 py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-tcc-blue text-sm font-bold uppercase tracking-wider mb-2 block font-semibold">TCC Faculty & Staff</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tcc-deep mb-4">บุคลากรและคณะครู</h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base font-light">
          คณะผู้บริหาร ครูอาจารย์ และเจ้าหน้าที่ผู้ขับเคลื่อนวิสัยทัศน์และความเป็นเลิศทางการศึกษาของวิทยาลัย
        </p>
      </section>

      {/* 1. Executives Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 relative pb-3">
            คณะผู้บริหารวิทยาลัย
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-tcc-gold rounded-full"></span>
          </h2>
        </div>

        {/* Director Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-10 max-w-4xl mx-auto mb-12 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Director Image */}
            <div className="flex-shrink-0 relative w-48 h-48 rounded-full overflow-hidden border-4 border-tcc-light shadow-md">
              <img
                src={executiveData.director.image}
                alt={executiveData.director.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Welcome message and details */}
            <div className="flex-grow text-center md:text-left">
              <span className="text-tcc-blue text-xs font-bold tracking-widest uppercase block mb-1">Director's Welcome</span>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{executiveData.director.name}</h3>
              <p className="text-slate-500 text-sm font-semibold mb-4">{executiveData.director.role}</p>
              <div className="relative bg-slate-50 p-5 rounded-xl border border-slate-100 text-slate-600 text-sm leading-relaxed font-light italic">
                <span className="absolute top-2 left-2 text-4xl text-slate-200 font-serif leading-none">“</span>
                <p className="relative z-10 px-4">
                  {executiveData.director.message}
                </p>
                <span className="absolute bottom-2 right-2 text-4xl text-slate-200 font-serif leading-none">”</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deputy Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {executiveData.deputies.map((dep) => (
            <div
              key={dep.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow group"
            >
              {/* Deputy Avatar */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                <img src={dep.image} alt={dep.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-slate-800 text-base mb-1">{dep.name}</h4>
              <p className="text-xs text-slate-400 font-semibold">{dep.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Faculty / Teachers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 relative pb-3">
            คณาจารย์แยกตามฝ่ายงาน
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-tcc-gold rounded-full"></span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="bg-white p-1.5 rounded-xl border border-slate-200 flex space-x-1 shadow-sm">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  activeTab === key
                    ? "bg-tcc-deep text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                {teacherDepartments[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Contents */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 max-w-5xl mx-auto">
          <div className="mb-8 pb-6 border-b border-slate-100 text-center sm:text-left">
            <h3 className="text-xl font-bold text-tcc-deep mb-2">
              {teacherDepartments[activeTab].title}
            </h3>
            <p className="text-slate-500 text-sm font-light">
              {teacherDepartments[activeTab].description}
            </p>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teacherDepartments[activeTab].teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-5 border border-slate-100 flex items-center space-x-4 hover:bg-slate-100/50 hover:border-slate-200/50 transition-all duration-200"
              >
                {/* Styled Letter Avatar */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tcc-light text-tcc-blue font-extrabold text-base flex items-center justify-center shadow-sm">
                  {teacher.name.split(" ")[1]?.[0] || "ครู"}
                </div>
                
                {/* Teacher details */}
                <div className="min-w-0 flex-grow">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base truncate">{teacher.name}</h4>
                  <p className="text-xs text-slate-400 font-semibold mb-1.5">{teacher.role}</p>
                  
                  {/* Email contact */}
                  <a
                    href={`mailto:${teacher.email}`}
                    className="inline-flex items-center text-xs text-tcc-blue hover:underline"
                  >
                    {/* SVG envelope */}
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{teacher.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
