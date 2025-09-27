import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vjzhskmqocpevrswrccg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqemhza21xb2NwZXZyc3dyY2NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4ODU0NjksImV4cCI6MjA3MjQ2MTQ2OX0.453XV-XqTN4Oq9G6eVutfYF9ClRDH8NGtEmza-H38z0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
