
let btnSignIn=document.getElementById("signIn");
let btnSignUp=document.getElementById("signUp");
let SignUpForm=document.querySelector(".sign-up");

btnSignIn.onclick=function(){
    SignUpForm.classList.remove('active');
}
btnSignUp.onclick=function(){
    SignUpForm.classList.add('active');
}