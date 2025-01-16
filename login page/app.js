
const supabaseUrl = 'https://anwsmmamjbpvcmqqefvm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFud3NtbWFtamJwdmNtcXFlZnZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMzgwNjIsImV4cCI6MjA1MjYxNDA2Mn0.edzUc3RPgWhtKxuJP8LkQhHRvJzSAiXL5TfpUdYjwB4"
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)


console.log(supabaseClient);

const Email=document.getElementById('Email')
const Password=document.getElementById('Password')
const button=document.getElementById('Btn')

console.log(Email, Password, button);

async function Login(){

    const Email= Email.value
    const Passwrd= Password.value
    
    

    const { data, error } = await supabaseClient.Login({
        email: 'Email',
        password: 'Password',
      })
      
}
Login()