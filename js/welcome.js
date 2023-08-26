let userMessage = document.getElementById("userMessage");
let logOutBtn = document.getElementById("logOutBtn");
if (localStorage.getItem("userName") != null) {
  userMessage.innerHTML = `welcome ${localStorage.getItem("userName")}`;
}
function logout() {
  window.location.href = "logup.html";
  localStorage.removeItem("userName");
}
logOutBtn.addEventListener("click", logout);
