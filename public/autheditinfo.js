/*
* this file will edit account information ( email and password) from the profile page.
* All changes will be updated to the trace database. 
*/
const editForm = document.querySelector('#editinfo-form');
editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user's information
  const email = editForm['userEmail'].value;
  const newEmail = editForm['userNewEmail'].value;

  const password = editForm['userPassword'].value;
  const newPassword = editForm['userNewPassword'].value;

  var user = firebase.auth().currentUser;

  if (newEmail) {
  firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
          userCredential.user.updateEmail(newEmail);
          window.location.href = 'index.html';
          alert("Email successfully changed. Please sign in with new account information.");

      })
  }

  if (newPassword){
  firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
          userCredential.user.updatePassword(newPassword);
          window.location.href = 'index.html';
          alert("Password successfully changed. Please sign in with new account information.");

      })
  }
})
