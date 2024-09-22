let btn = document.getElementsByClassName("btn")[0];
let email = document.getElementById("email");
let errPara = document.getElementById("error")

function error() {
    errPara.innerText = "Invalid Email";
    email.value = "";
}

function validation() {
    emailValue = email.value;
    if(!(emailValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))){
        error()
    } else {
        email.value = "";
        errPara.innerText = ""
        window.location.href = "success.html"
    }
}

btn.addEventListener("click",()=>{
    validation()
})
