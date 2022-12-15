import { createClient } from "@supabase/supabase-js";

const url = "";
const key = "";
export const client = createClient(url, key);
