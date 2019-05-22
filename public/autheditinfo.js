// edit info
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
          window.location.href = 'profile.html';
      })
  }

  if (newPassword){
  firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(userCredential) {
          userCredential.user.updatePassword(newPassword);
          window.location.href = 'index.html';

      })
  }
})
