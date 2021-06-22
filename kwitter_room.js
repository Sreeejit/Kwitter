
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function getName(){
var getName = localStorage.getItem("User");
document.getElementById("welcome").innerHTML = "Welcome : " + getName;
}

function logout(){
localStorage.removeItem("User");
window.location = "sign_up.html";
}
