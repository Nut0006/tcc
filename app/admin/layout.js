"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let authSubscription;

    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session) {
          setUser(session.user);
          if (pathname === "/admin/login") {
            router.push("/admin");
          }
        } else {
          setUser(null);
          if (pathname !== "/admin/login") {
            router.push("/admin/login");
          }
        }
      } catch (err) {
        console.error("Error checking session:", err);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
          if (pathname === "/admin/login") {
            router.push("/admin");
          }
        } else {
          setUser(null);
          if (pathname !== "/admin/login") {
            router.push("/admin/login");
          }
        }
        setLoading(false);
      }
    );

    authSubscription = subscription;

    return () => {
      if (authSubscription) authSubscription.unsubscribe();
    };
  }, [pathname, router]);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center space-y-4">
        {/* Loading Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-tcc-gold border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
        </div>
        <p className="text-slate-400 text-sm font-light tracking-wide animate-pulse">กำลังตรวจสอบสิทธิ์การเข้าถึง...</p>
      </div>
    );
  }

  // If we are on the login page, just render the login page without the admin panel wrap
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  // If not logged in and not on login page, don't render anything (redirecting)
  if (!user && pathname !== "/admin/login") {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-100">
      {/* Admin Navbar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Branding */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f2d59] to-[#0066cc] flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 100 100" className="w-5 h-5 text-white fill-current">
                    <path d="M50 15 L20 70 L50 60 L80 70 Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-none">TCC Admin Panel</span>
                  <span className="text-[10px] text-slate-400">ระบบจัดการหลังบ้าน</span>
                </div>
              </Link>
            </div>

            {/* User Info & Logout */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex flex-col items-end text-xs">
                <span className="text-slate-300 font-medium">{user?.email}</span>
                <span className="text-[10px] text-tcc-gold">ผู้ดูแลระบบ</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="px-3.5 py-1.5 bg-slate-800 hover:bg-rose-600 hover:text-white border border-slate-700 hover:border-transparent text-slate-300 text-xs font-bold rounded-lg transition-all duration-200 flex items-center space-x-1.5 cursor-pointer shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>ออกจากระบบ</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Wrap */}
      <div className="flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
}
