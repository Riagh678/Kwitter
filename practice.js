
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC30UvlSwPqik1f7Slb3sUV3HPx-XMiSk4",
    authDomain: "kwitter-d3189.firebaseapp.com",
    databaseURL: "https://kwitter-d3189-default-rtdb.firebaseio.com",
    projectId: "kwitter-d3189",
    storageBucket: "kwitter-d3189.appspot.com",
    messagingSenderId: "708898482143",
    appId: "1:708898482143:web:e1e4b8308887cbad60c66a",
    measurementId: "G-Z8WZMF63K9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function addUser(){
user_name - document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose: "adding user"
});
  } 