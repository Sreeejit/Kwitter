
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
    row = "<div class ='Room_names'>"+Room_names+"onclick = ToRoomName(this.id)>"  + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
// getData();

function getName(){
var getName1 = localStorage.getItem("User");
document.getElementById("welcome").innerHTML = "Welcome : " + getName1;
}

function logout(){
localStorage.removeItem("User");
window.location = "index.html";
}


function addRoom(){
room_name = document.getElementById("addRoomINPUT").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  })
  localStorage.setItem("Room Name : ", room_name);
  window.location = "kwitter_page.html"
}

function ToRoomName(AROOMNAME){
    localStorage.setItem("Room Name : ", AROOMNAME);
    window.location = "kwitter_page.html"
  }