const signup=document.getElementById('signup');
const loginForm=document.getElementById('login-form');
const switchLogin=document.getElementById('switchLogin');
const switchSingup=document.getElementById('switchSingup');
const signupBtn=document.getElementById('signup-btn');
console.log(signupBtn);

// function switchLogin(){
//     loginForm.classList.add('hidden')
//     signup.classList.remove('hidden')
    
    
// }

// function switchSingup(){
//     signup.classList.add('hidden')
//     loginForm.classList.remove('hidden')

// }

switchLogin.addEventListner('click', ()=>{
    loginForm.classList.add('hidden')
    signup.classList.remove('hidden')
})

switchSingup.addEventListner('click', ()=>{
    signup.classList.add('hidden')
    loginForm.classList.remove('hidden')
})

signupBtn.addEventListener('click', ()=>{
    const email = singupEmail.value
    const password = singupPassword.value
    console.log(email, password);
    
})