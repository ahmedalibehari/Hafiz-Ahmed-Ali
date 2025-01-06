

const supabaseUrl = 'https://nzyaylzqinygwzhcdybl.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56eWF5bHpxaW55Z3d6aGNkeWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMDI4NTksImV4cCI6MjA1MDg3ODg1OX0.ek6gM-ooRPGvAXNlJXQnqbeCVtIoSEpB-uVKmTBydWE"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)




const link=document.getElementById('link');
const lock=document.getElementById('lock');



async function add() {
    console.log(link.value);
    const task = link.value
   
    const { error } = await supabaseClient
  .from('todoo')
  .insert({ task })

   
   
   
}
add()