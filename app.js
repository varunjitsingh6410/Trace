const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

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