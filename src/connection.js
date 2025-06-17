import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://hzwalwwcuhouzlnyspza.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6d2Fsd3djdWhvdXpsbnlzcHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMDg4NzEsImV4cCI6MjA2NTY4NDg3MX0.UTjyoOUVmQSgxKvuBG9scx5MQyZjN1dCohqhvWdvhlg'

export const supabase = createClient(supabaseUrl, supabaseKey)
