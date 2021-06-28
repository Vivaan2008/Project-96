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

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class= 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}