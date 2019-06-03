/*
* this file will create new user to the trace database using firebase authentification
* from information inputed in the register page.  
*/
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user's information
  const name = signupForm['userFullName'].value;
  const email = signupForm['userEmail'].value;
  const password = signupForm['userPassword'].value;



  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
/*
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name*/
      return db.collection('users').doc(cred.user.uid).set({
        name: name

    }).then(() => {
      signupForm.reset();
      window.location.href = 'map.html';
    }).catch(function(error) {
    });

  }).catch(function(error) {
    if (error.code === 'auth/weak-password') {
      signupForm['userPassword'].value = "";
      alert("Password should be at least 6 characters.");
    }

    if (error.code === 'auth/email-already-in-use') {
      signupForm['userEmail'].value = "";
      alert("The email address is already in use by another account.");
    }
  });
  /*
  auth.createUserWithEmailAndPassword(email,password).catch(function(error) {
    if (error.code === 'auth/weak-password') {
      signupForm['userPassword'].value = "";
      alert("Password should be at least 6 characters.");
    }

    if (error.code === 'auth/email-already-in-use') {
      signupForm['userEmail'].value = "";
      alert("The email address is already in use by another account.");
    }



  });


*/

})
