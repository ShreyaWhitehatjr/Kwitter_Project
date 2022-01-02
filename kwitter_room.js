var firebaseConfig = {
      apiKey: "AIzaSyCe9MxJx32M7jdxoAHwEPhPV3sDbfRJSPE",
      authDomain: "class-93-ce50e.firebaseapp.com",
      databaseURL: "https://class-93-ce50e-default-rtdb.firebaseio.com",
      projectId: "class-93-ce50e",
      storageBucket: "class-93-ce50e.appspot.com",
      messagingSenderId: "195562705145",
      appId: "1:195562705145:web:276ef4c66ada7289399228"
    };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User");
document.getElementById("Greetings").innerHTML = "Welcome " + user_name + "!";
function Add_Room(){
      Room_name = document.getElementById("Input_2").value;
      localStorage.setItem("Room_name",Room_name);
      firebase.database().ref("/").child(Room_name).update({Purpose :"adding room name"});
      window.location = "Kwitter_Page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
       row = '<div class="room_name" id="'+Room_names+'" onclick="Go_to_Room(this.id)"> #'+Room_names+' </div>';
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function Go_to_Room(name){
 localStorage.setItem("Room_name",name); 
 window.location = "kwitter_page.html";    
}

function Logout(){
localStorage.removeItem("Room_name");
localStorage.removeItem("User");
window.location = "index.html";

}
 
