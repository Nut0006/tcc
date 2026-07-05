import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("กรุณาตั้งค่าตัวแปรสภาพแวดล้อม Supabase ในไฟล์ .env.local หรือ .env")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
