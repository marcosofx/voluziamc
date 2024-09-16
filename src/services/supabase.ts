
import 'react-native-url-polyfill/auto';

import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_PUBLIC} from '@env';

console.log(SUPABASE_URL, SUPABASE_ANON_PUBLIC);  

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_PUBLIC);


   


