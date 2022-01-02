function Login(){
    User_name = document.getElementById("Input_1").value;
    localStorage.setItem("User",User_name);
    window.location = "kwitter_room.html";
}