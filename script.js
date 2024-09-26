
const form= document.getElementById("form");

const username = document.getElementById("username");

const email  = document.getElementById("email");

const password = document.getElementById("password");

const confirmpass = document.getElementById("cpass");

const submit = document.getElementById("btn");

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    validateInputs();
})

let validateInputs = ()=>{
    const usernameValue = username.value.trim();
    
    const emailvalue = email.value.trim();

    const passwordvalue = password.value.trim();

    const cpasswordvalue = confirmpass.value.trim();

    if(usernameValue ===''){
        setErroru(username, 'Username is Required');
    }
    else{
        setsucces(username);
    }
    

    if(emailvalue===''){
        setErroru(email,'Email is required');
    }
    else if(!isValidEmail(emailvalue)){
        setErroru(email,'Provide a valid email address')
    }
    else{
        setsucces(email);
    }

    if(passwordvalue===''){
        setErroru(password,'Password is required')
    }
    else if(passwordvalue.length < 8){
        setErroru(password,'Password must be at least 8 characters')
    }
    else{
        setsucces(password);
    }

    if(cpasswordvalue===''){
        setErroru(confirmpass,'Password is required');
    }
    else if(cpasswordvalue!== passwordvalue){
        setErroru(confirmpass,'Password does not match')
    }
    else{
        setsucces(confirmpass);
    }

}

const setErroru = (element, message)=>{
    const inputcontrol= element.parentElement;
    const errordisplay = inputcontrol.querySelector('.error');
    errordisplay.innerText = message;

    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
}

const setsucces= element =>{
    const inputcontrol = element.parentElement;
    const errordisplay = inputcontrol.querySelector('.error');

    errordisplay.innerText='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
}

function isValidEmail(e) {
    var reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return reg.test(e);

}