/*
* This file contains a function that will set up a local server using
* node.js and express. 
*/
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
