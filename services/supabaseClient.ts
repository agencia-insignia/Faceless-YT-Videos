import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are missing. Lead capture will not work.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

export const captureLead = async (email: string, source: string, details: any = {}) => {
  try {
    const { error } = await supabase
      .from('leads')
      .insert([
        { 
          email, 
          source, 
          details 
        }
      ]);
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error capturing lead:', error);
    return { success: false, error };
  }
};
