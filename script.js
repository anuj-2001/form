function isEmpty(){
    const sname = document.getElementById("sname");
    const id = document.getElementById("id");
    const cname = document.getElementById("cname");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const cpass = document.getElementById("cpass");
    if(sname.value=="" || id.value=="" || cname.value=="" || email.value=="" || pass.value=="" || cpass.value==""){
        alert("Fill all the fields!!");
        return false;
    }
    else{
        return true;
    }
}
function validEmail()
{
    var inputText = document.getElementById("email");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        return false;
    }
}
function checkPassword(){
    var pass = document.getElementById("pass");
    var cpass = document.getElementById("cpass");
    if(pass.value  == cpass.value){
        return true;
    }
    else {
        alert("Compare password doesn't match with your password");
        return false;
    }
}