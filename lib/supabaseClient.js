import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bfyfmeezmpcdjmpiztrr.supabase.co";
const supabaseKey = "";
  
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
