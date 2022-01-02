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

Room_name = localStorage.getItem("Room_name");
User_name = localStorage.getItem("User");

function Send(){
      Msg = document.getElementById("Message").value;
      firebase.database().ref(Room_name).push({
            Name: User_name,Message:Msg,Like:0
      });
      document.getElementById("Message").value="";
}

function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

msg = message_data['Message'];
console.log(msg);
like = message_data['Like'];
console.log(like);
name = message_data['Name'];
console.log(name);

row = '<h4>' + name + '<img src="tick.png" class="user_tick">  </h4>';
row_1 = '<h4>' +msg+ '</h4>';
row_2 = '<button id="'+firebase_message_id+'" value="'+like+'" class="btn btn-warning" onclick="update(this.id)">';
row_3 = '<span class="glyphicon glyphicon-thumbs-up"> Like: '+like+'</span> </button><hr>';
a = row + row_1 + row_2 + row_3
document.getElementById("output").innerHTML+=a;

//End code
      } });  }); }
getData();

function update(message_id){
      btn_id = message_id;
      likes = document.getElementById(btn_id).value;
      update_like = Number(likes)+1;
      firebase.database().ref(Room_name).child(message_id).update({
            Like:update_like
      });
}
function Logout(){
      localStorage.removeItem("Room_name");
      localStorage.removeItem("User");
      window.location = "index.html";

}
