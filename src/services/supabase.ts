/*
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_PUBLIC} from '@env';

console.log(SUPABASE_URL, SUPABASE_ANON_PUBLIC);  

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC);
*/

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qqdbqgurtnesqppfbsuy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZGJxZ3VydG5lc3FwcGZic3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzMDQxODIsImV4cCI6MjA0MDg4MDE4Mn0.H-ZZSrDLPyZ8wMRQsr3bmwQPMTh5snrnTgoU68LW4I8';
export const supabase = createClient(supabaseUrl, supabaseKey);

   


