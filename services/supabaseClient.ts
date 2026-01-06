import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabase) {
  console.warn('Supabase credentials are missing. Lead capture will not work.');
}

export const captureLead = async (email: string, source: string, details: any = {}) => {
  if (!supabase) {
    console.warn('Lead capture skipped: Supabase client not initialized.');
    return { success: false, error: 'Missing configuration' };
  }
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
