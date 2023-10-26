import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://poctwtdaqwxjytgfjckp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvY3R3dGRhcXd4anl0Z2ZqY2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0NjA4NDMsImV4cCI6MjAxMzAzNjg0M30.vjmrj3bptjfoK5aHmhumgymVjKcJG5l2ARAtwOtvxPA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
