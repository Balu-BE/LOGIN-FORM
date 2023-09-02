var eye;
function pass(){
    if(eye == 1)
    {
        document.getElementById('password').type='password';
        document.getElementById('pwd').src = '..\src\close-eye.png';
        eye = 0;
    }
    else
    {
        document.getElementById('password').type='text';
        document.getElementById('pwd').src = '..\..\src\open-eye.png';
        eye = 1;
    }
}

const username = document.querySelector('#Username');
const email = document.querySelector('#Email');
const password = document.querySelector('#Password');
const confirm_password = document.querySelector('#Cpassword');

form.addeventListener('submit',(e)=>{
    // It will chech whether the form is success or not if not it will not allow to submit that is why we used preventDefault func 
    if(!validateInputs()){
        e.preventDefault();
    } ;
})

function validateInputs(){
    const usernameval = username.ariaValueMax.trim()
    const emailval = email.ariaValueMax.trim()
    const passwordval = password.value.trim()
    const confirm_passwordval =confirm_password.value.trim()
    let success = true

    if(usernameval==''){
        success =false;
        setError(username,"Username is required")
        
    }
    else{
        setSuccess(username)
    }

    if(emailval===''){
        success =false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailval)){
        success =false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if (passwordval ===''){
        success =false;
        setError(password,'Password is required')
    }
    else if(passwordval.length<8){
        success =false;
        setError(password,'Password must be atlease 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(confirm_passwordval ===''){
        success =false;
        setError(confirm_password,'Password confirmation is required')

    }
    else if(confirm_passwordval!==passwordval){
        success =false;
        setError(confirm_password,'Passwords does not match')
    }
    else{
        setSuccess(confirm_password)
    }
    return success;
}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
    
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = "";
    inputGroup.classList.add('success')
    inputGroup.classList.remove('remove')
    
}
const validateEmail =(email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    );
};

