import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const FALLBACK_URL = "https://nojsvxkjxoliabnbvxgg.supabase.co";
const FALLBACK_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vanN2eGtqeG9saWFibmJ2eGdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4MDQ1MzAsImV4cCI6MjEwNzM4MDUzMH0.YtFGF6uSh-Aw_sdCD7fT-fZVF1YxtMpgtULbaoLoX94";

export const supabase = createClient(
  supabaseUrl || FALLBACK_URL,
  supabaseAnonKey || FALLBACK_KEY,
);
