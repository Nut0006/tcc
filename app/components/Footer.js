"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactInfo } from "../data/schoolData";

export default function Footer() {
  const pathname = usePathname();

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }
  return (
    <footer className="bg-[#0b192c] text-slate-300 border-t-4 border-tcc-blue">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About the School */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-white text-tcc-deep rounded-full shadow-md">
                <svg
                  viewBox="0 0 100 100"
                  className="w-7 h-7 fill-current text-tcc-deep"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M50 15 L20 70 L50 60 L80 70 Z" />
                  <circle cx="50" cy="80" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-white">วิทยาลัยพณิชยการธนบุรี</span>
                <span className="text-xs text-slate-400">Thonburi Commercial College</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              สถาบันอาชีวศึกษาชั้นนำด้านบริหารธุรกิจ การจัดการ และเทคโนโลยีดิจิทัล มุ่งเน้นการสร้างวิชาชีพควบคู่คุณธรรมตามมาตรฐานสากล
            </p>
            <div className="flex space-x-3 pt-2">
              {/* Facebook Link */}
              <a
                href={contactInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-tcc-blue text-white rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              {/* Youtube Link */}
              <a
                href={contactInfo.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-slate-800 hover:bg-red-600 text-white rounded-full transition-colors duration-200"
                aria-label="Youtube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 border-b border-slate-800 pb-2">ลิงก์ที่เป็นประโยชน์</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-tcc-blue transition-colors duration-200">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-tcc-blue transition-colors duration-200">
                  เกี่ยวกับวิทยาลัย
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-tcc-blue transition-colors duration-200">
                  ข่าวประชาสัมพันธ์
                </Link>
              </li>
              <li>
                <Link href="/personnel" className="hover:text-tcc-blue transition-colors duration-200">
                  บุคลากรครู
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-tcc-blue transition-colors duration-200">
                  สาขาที่เปิดสอน
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Portals */}
          <div>
            <h3 className="text-base font-bold text-white mb-4 border-b border-slate-800 pb-2">ระบบบริการออนไลน์</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="https://sgs.vec.go.th" target="_blank" rel="noopener noreferrer" className="hover:text-tcc-blue transition-colors">
                  ระบบ SGS (วัดผลการเรียน)
                </a>
              </li>
              <li>
                <a href="http://rms.panitthon.ac.th" target="_blank" rel="noopener noreferrer" className="hover:text-tcc-blue transition-colors">
                  ระบบ RMS (สารสนเทศวิทยาลัย)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tcc-blue transition-colors">
                  ระบบสมัครเรียนออนไลน์
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-tcc-blue transition-colors">
                  TCC E-Learning
                </a>
              </li>
              <li>
                <a href="https://www.vec.go.th" target="_blank" rel="noopener noreferrer" className="hover:text-tcc-blue transition-colors">
                  สำนักงานคณะกรรมการการอาชีวศึกษา
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-base font-bold text-white mb-4 border-b border-slate-800 pb-2">ติดต่อสถาบัน</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {contactInfo.address}
            </p>
            <div className="text-sm space-y-1">
              <p className="flex items-center space-x-2">
                <span className="text-tcc-blue">โทร:</span>
                <span>{contactInfo.phones.join(", ")}</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-tcc-blue">แฟกซ์:</span>
                <span>{contactInfo.fax}</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-tcc-blue">อีเมล:</span>
                <a href={`mailto:${contactInfo.email}`} className="hover:underline hover:text-tcc-blue">
                  {contactInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} วิทยาลัยพณิชยการธนบุรี. สงวนลิขสิทธิ์ทั้งหมด.</p>
          <p className="mt-2 sm:mt-0">
            ออกแบบและพัฒนาเพื่อส่งอาจารย์ | โดยนักศึกษาอาชีวะ TCC
          </p>
        </div>
      </div>
    </footer>
  );
}
