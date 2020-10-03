const form = document.getElementById('from');
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();

});

function checkInput() {
    const namevalue = name.value.trim(); 
    const emailvalue = email.value.trim(); 
    const mobilevalue = mobile.value.trim(); 
    const msgvalue = msg.value.trim(); 

    if(namevalue === '') {
        //Show error
        //add error class
        setErrorFor(name, 'Please fill the user name'); 
    } else {
        //add success class 
        setSuccessFor(name);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form control error'
}


