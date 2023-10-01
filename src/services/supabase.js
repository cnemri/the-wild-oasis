import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://itnbiznuoikjtqezcpth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bmJpem51b2lranRxZXpjcHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NDkyODIsImV4cCI6MjAxMTEyNTI4Mn0.gRYT1jlV08zjKLfiys6wafHRrNRX3mBUhZRVymIzVUw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
