 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCUfK3StGMiEseWj5BIqs_m5s3A26yJzVM",
    authDomain: "kwitter-f25ce.firebaseapp.com",
    databaseURL: "https://kwitter-f25ce-default-rtdb.firebaseio.com",
    projectId: "kwitter-f25ce",
    storageBucket: "kwitter-f25ce.appspot.com",
    messagingSenderId: "53672605686",
    appId: "1:53672605686:web:6b42b1d617b26d457cf9d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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