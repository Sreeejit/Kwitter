function login(){
document.getElementById("loginINPUT").value;
}

function signup(){
var UserName = document.getElementById("sign_upINPUT").value;
localStorage.setItem("User", UserName);
window.alert("You have successfully signed up to Kwitter you will be redirected to the Social page");
window.location = "kwitter_room.html";
}

function change(){
window.location = "login.html";
}