
var firebaseConfig = {
      apiKey: "AIzaSyAXFKDzEGn8lf96SpdozgmV7F0JExZhHv8",
      authDomain: "rohankwitter.firebaseapp.com",
      databaseURL: "https://rohankwitter-default-rtdb.firebaseio.com",
      projectId: "rohankwitter",
      storageBucket: "rohankwitter.appspot.com",
      messagingSenderId: "494965340380",
      appId: "1:494965340380:web:1ea593d20c30d978975c19"
    };
    firebase.initializeApp(firebaseConfig);
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"

      });
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(  this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

   
      });});}
getData();
 function redirectToRoomName(name)
 {
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";


 }

