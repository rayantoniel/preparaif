import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bzgojevqdkdylwfojxkm.supabase.co";
const supabaseAnonKey = "sb_publishable_b3AYBj5ABtk71DxmKgF-gw_jYhQ4uku";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
