import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://phrcgxahoyzoocbzanju.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBocmNneGFob3l6b29jYnphbmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4MzA4MzQsImV4cCI6MjAyNDQwNjgzNH0.-TUkOUnjkd8hBmbiCiK0nkVabcsAISMDVTnxFMajrkU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
