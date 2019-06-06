/*
* this file will go to the trace database using firebase authentification
* and will log in the user when the email and password is correct. 
*/
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = loginForm['userEmail'].value;
  const password = loginForm['userPassword'].value;

  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    if (error.code === 'auth/wrong-password') {
      loginForm.reset();
      alert("Invalid password. Please try again.");
    }

    if  (error.code === 'auth/user-not-found') {
      loginForm.reset();
      alert("Invalid email. Please try again.")
    }

  });

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    window.location.href = 'map.html';
  })

})
