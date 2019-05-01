/*const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAtMlkkbp0XNEIzmC-qbRKpQM6U2lzzfLs",
    authDomain: "trace-43d6f.firebaseapp.com",
    databaseURL: "https://trace-43d6f.firebaseio.com",
    projectId: "trace-43d6f",
    storageBucket: "trace-43d6f.appspot.com",
    messagingSenderId: "241015211966"
  };
  firebase.initializeApp(config);

// Initialize Firebase with a "default" Firebase project
var defaultProject = firebase.initializeApp(config);

console.log(defaultProject.name);  // "[DEFAULT]"

// Access Firebase services using shorthand notation
defaultStorage = firebase.storage();
defaultDatabase = firebase.database();*/

//console.log("Hello world");
const express = require('express');
const app = express();

app.use(express.static('../public'));

const usersDb = {
  'Varun':{username: 'Varun6410', password: 'cookie123'},
  'Sasri':{username: 'SasBoi', password: 'doggo123'},
  'Thao':{username: 'Thao12', password: 'boba123'},
  'Yumi':{username: 'YumYum', password: 'coachella123'}
};

// This function returns the user names. Will later be
// refactored into a function for forgotten passwords. 
app.get('/users', (req, res) => {
  console.log('get users function');
  const userNames = Object.keys(usersDb);
  console.log(userNames);
  res.send('hope you are having a good day!');
});

// This function is going to be used for logging in. 
app.get('/users/:userid', (req, res) => {
  const nameToFind = req.params.userid;
  const userInfo = usersDb[nameToFind];
  console.log(nameToFind, '->', userInfo);
  
  if (userInfo){
    res.send(userInfo);
  } else {
    res.send({});
  }
});

app.listen (3000, () => {
  console.log("Server started");
});









































