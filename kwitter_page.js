//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBS4AhFj5nEVNl8YHRY-AlS204t0VIEJ0c",
    authDomain: "project-d23d9.firebaseapp.com",
    databaseURL: "https://project-d23d9-default-rtdb.firebaseio.com",
    projectId: "project-d23d9",
    storageBucket: "project-d23d9.appspot.com",
    messagingSenderId: "606270376731",
    appId: "1:606270376731:web:12510198fb1e06e1a861be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
//End code
    } });  }); }
getData();

function back()
{
    localStorage.removeItem("room_name");
    window.location.replace("kwitter_room.html");
}
