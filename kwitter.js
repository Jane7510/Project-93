function AddUser(){

    user_name = document.getElementById("UserName").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}