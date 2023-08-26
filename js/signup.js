let signupBtn = document.getElementById("signUpbtn");
let signupName = document.getElementById("signupName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let alertMessage = document.getElementById("alertMessage");
let list = [];
if (localStorage.getItem("users") != null) {
  list = JSON.parse(localStorage.getItem("users"));
}
function signUp() {
  let user = {
    userName: signupName.value,
    userEmail: signupEmail.value,
    userPassword: signupPassword.value,
  };
  if (checkInputEmpty() == true) {
    getAlertMessage("All Input required", "red");
  } else {
    if (checkEmailExist() == true) {
        getAlertMessage("Email Already Exist", "red");
    } else {
      list.push(user);
      localStorage.setItem("users", JSON.stringify(list));
      getAlertMessage("Success", "green");
      clearForm();
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
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    return true;
  } else {
    return false;
  }
}
function clearForm() {
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}
function checkEmailExist() {
  for (let i = 0; i < list.length; i++) {
    if (list[i].userEmail == signupEmail.value) {
      return true;
    }
  }
}
signupBtn.addEventListener("click", signUp);
