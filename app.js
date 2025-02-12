
function Email() {
    var actualEmail = "dawoodraza@gmail.com"
    var emailId = document.getElementById('email1').value;
    var error1 = document.getElementById('EmailPara')
    if (emailId !== actualEmail) {
        error1.innerHTML = "please enter correct email"
        error1.style.color = "red"
        error1.style.fontSize="small"
    } else {
        error1.innerHTML = "";

    }
}
function Password() {
    var actualPassword = "1234567"
    var passwordId = document.getElementById("password2")
    var error2 = document.getElementById("PasswordPara")
    if (passwordId !== actualPassword) {
        error2.innerHTML = "please enter correct password"
        error2.style.color = "red"
        error2.style.fontSize="small"
    }    else {
        error2.innerHTML = "";

    }
}