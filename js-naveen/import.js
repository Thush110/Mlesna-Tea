const form = document.getElementById('form');
const cname = document.getElementById('cname');
const name = document.getElementById('name');
const address = document.getElementById('address');
const number = document.getElementById('number');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    //get value from inputs
    const cnamevalue = cname.value.trim();
    const namevalue = name.value.trim();
    const addressvalue = address.value.trim();
    const numbervalue = number.value.trim();
    const emailvalue = email.value.trim();

    if(cname == ''){
        //show error
        //add error class
        setErrorFor(cname, 'company name can not be blank');
    }
    else{
        //add success class
        setSuccessFor(cname);
    }

}
function setErrorFor(inputs, message){
    const formControl = input.parentElement;//.form-control
    const small = formControl.querySelector('small');


    //add error mag inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input ){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}