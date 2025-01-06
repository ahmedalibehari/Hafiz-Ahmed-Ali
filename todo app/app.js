

const supabaseUrl = 'https://hylkvfhkobzrwrjaoosi.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5bGt2Zmhrb2J6cndyamFvb3NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNzQzNDQsImV4cCI6MjA1MTc1MDM0NH0.mrCnwAH-VmI-4S0vnMFOTHjCYHPUj1SGvxK_SNM2P_I"
const supabaseNew = supabase.createClient(supabaseUrl, supabaseKey)
console.log(supabaseNew);




const input=document.getElementById('input');

async function add() {
const task = input.value
console.log(input.value);
    
    const { error } = await supabaseNew
  .from('toodo')
  .insert({ task})

   
}
add()