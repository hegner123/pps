import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bfyfmeezmpcdjmpiztrr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeWZtZWV6bXBjZGptcGl6dHJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwMDQ2MzEsImV4cCI6MTk5MDU4MDYzMX0.OiDJeCyN8-7vEe2-sAQEH9BsO5gXlTaYO_MGe_sEC-M";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
