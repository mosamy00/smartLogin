let signinBtn = document.getElementById("signinbtn");
let signinEmail = document.getElementById("signinEmail");
let signinPassword = document.getElementById("signinPassword");
let list = [];
if (localStorage.getItem("users") != null) {
  list = JSON.parse(localStorage.getItem("users"));
}
function login() {
    if(checkInputEmpty()==true){
        getAlertMessage("All Input required","red") 
    }
    else{
        if (checkEmailPassword() == true) {
            window.location.href="welcome.html"
        } else {
          getAlertMessage("incorrect email or password","red") 
        }
    }
}
function checkEmailPassword() {
  for (let index = 0; index < list.length; index++) {
    if (
      list[index].userEmail == signinEmail.value &&
      list[index].userPassword == signinPassword.value
    ) {
      localStorage.setItem("userName", list[index].userName);
      return true;
    }
  }
}
function getAlertMessage(text, color) {
    alertMessage.classList.replace("d-none", "d-flex");
    alertMessage.innerHTML = text;
    alertMessage.style.color = color;
  }
  function checkInputEmpty() {
    if (
        signinEmail.value == "" ||
        signinPassword.value == ""
    ) {
      return true;
    } else {
      return false;
    }
  }
signinBtn.addEventListener("click", login);
