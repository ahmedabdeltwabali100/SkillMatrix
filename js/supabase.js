// js/supabase.js
// Supabase client initialization
// Replace the placeholder values below with your actual Supabase project credentials.
// Find them in: Supabase Dashboard → Project Settings → API

const SUPABASE_URL      = 'https://rqpnlemzfvpbfygknqcr.supabase.co';   // Project API URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxcG5sZW16ZnZwYmZ5Z2tucWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkyODk0ODcsImV4cCI6MjEwNDg2NTQ4N30.7q3w2cDjo9u6OPUtn2CFeh0OUlRdeGy89awRjomju78';
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Edge function base URL (Supabase functions endpoint)
const EDGE_URL = 'https://rqpnlemzfvpbfygknqcr.functions.supabase.co';
