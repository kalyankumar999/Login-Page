let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');

 email.addEventListener('textinput',emailVerify);
 password.addEventListener('textinput',passwordVerify);

function validate(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email.focus();
        emailError.style.display='block'
        return false;
    }
    if (password.value.length < 5){
        password.style.border = "1px solid red";
        password.focus();
        passwordError.style.display='block'
        return false;
    }
}

function emailVerify(){
    if(email.value.length>=8){
        email.style.border="1px solid silver"
        emailError.style.display='none';
        return true;
    }
}

function passwordVerify(){
    if(password.value.length>=5){
        password.style.border="1px solid silver"
        passwordError.style.display='none';
        return true;
    }
}