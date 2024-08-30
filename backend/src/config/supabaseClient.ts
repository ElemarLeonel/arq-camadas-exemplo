import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

if(!supabaseURL || !supabaseKey){
    throw new Error("SUPABASE_URL ou SUPABASE_KEY não configurados");
}

export const supabase = createClient(supabaseURL, supabaseKey);