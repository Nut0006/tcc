"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "หน้าแรก" },
    { href: "/about", label: "เกี่ยวกับวิทยาลัย" },
    { href: "/news", label: "ข่าวประชาสัมพันธ์" },
    { href: "/personnel", label: "บุคลากร" },
    { href: "/departments", label: "แผนกวิชา" },
    { href: "/contact", label: "ติดต่อเรา" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2 border-b border-slate-200/50"
          : "bg-white/90 sm:bg-transparent sm:backdrop-blur-none py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* SVG Logo */}
            <div className="relative w-12 h-12 flex items-center justify-center bg-tcc-deep text-white rounded-full shadow-md group-hover:scale-105 transition-transform duration-300">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ship Sails / Wings */}
                <path d="M50 15 L20 70 L50 60 L80 70 Z" className="text-white opacity-90" />
                <path d="M50 25 L35 65 L50 58 L65 65 Z" className="fill-tcc-gold" />
                {/* Wheel / Circle */}
                <circle cx="50" cy="80" r="10" stroke="white" strokeWidth="2.5" fill="none" />
                <line x1="50" y1="70" x2="50" y2="90" stroke="white" strokeWidth="2" />
                <line x1="40" y1="80" x2="60" y2="80" stroke="white" strokeWidth="2" />
                <line x1="43" y1="73" x2="57" y2="87" stroke="white" strokeWidth="2" />
                <line x1="43" y1="87" x2="57" y2="73" stroke="white" strokeWidth="2" />
                {/* Candle Flame at top */}
                <path d="M50 5 Q48 10 50 15 Q52 10 50 5 Z" className="fill-tcc-gold animate-pulse" />
              </svg>
            </div>
            
            {/* Text branding */}
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-tcc-deep leading-tight group-hover:text-tcc-blue transition-colors duration-300">
                วิทยาลัยพณิชยการธนบุรี
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Thonburi Commercial College
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative group ${
                    active
                      ? "text-tcc-blue bg-blue-50/50"
                      : "text-slate-700 hover:text-tcc-blue hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-tcc-blue rounded-full"></span>
                  )}
                  {!active && (
                    <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-tcc-blue/50 rounded-full group-hover:left-3 group-hover:right-3 transition-all duration-200"></span>
                  )}
                </Link>
              );
            })}
            
            {/* Call to Action: Smart Portals */}
            <Link
              href="#portals"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-tcc-deep to-tcc-blue hover:from-tcc-blue hover:to-tcc-deep text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              ระบบสารสนเทศ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-tcc-blue hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 border-b border-slate-200" : "max-h-0 opacity-0 overflow-hidden"
        } bg-white`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                  active
                    ? "text-tcc-blue bg-blue-50/70"
                    : "text-slate-700 hover:text-tcc-blue hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <Link
            href="#portals"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 mx-3 px-4 py-2.5 bg-gradient-to-r from-tcc-deep to-tcc-blue text-white text-sm font-bold rounded-lg shadow-sm"
          >
            ระบบสารสนเทศ (Shortcuts)
          </Link>
        </div>
      </div>
    </nav>
  );
}
