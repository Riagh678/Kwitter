
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGj3p8gQRvFvBU8wGiQiUUIG53KM9rxMw",
  authDomain: "qwitter-8bed5.firebaseapp.com",
  databaseURL: "https://qwitter-8bed5-default-rtdb.firebaseio.com",
  projectId: "qwitter-8bed5",
  storageBucket: "qwitter-8bed5.appspot.com",
  messagingSenderId: "559548015611",
  appId: "1:559548015611:web:e12252d8f537e89ba6e15e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function addRoom(){
  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name "
});
localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";

  }
function getData() {firebase     //Start code
.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name" , name);
window.loction ="kwitter_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";

}