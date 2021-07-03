//YOUR FIREBASE LINKS
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

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
UserID = localStorage.getItem("User");
LikesCount = 0;
room_name = localStorage.getItem("Room Name : ")
function Send() {
      Messages = document.getElementById("MessageInput").value;
      firebase.database().ref("/Messages/").child(room_name).push({
            UserName: UserID,
            Message: Messages,
            Likes: LikesCount

      })
}