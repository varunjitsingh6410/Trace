/*
* this file will pull up the account information from the trace database and
* will populate the information on the account page, including email, name, and
* the pet that was added to the database through the account. 
*/

auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').doc(user.uid).get().then(doc => {
      const name = document.querySelector('#name');
      name.textContent = doc.data().name;

      const pet = document.querySelector('#petname');
      pet.textContent = doc.data().pet;

      const petPic = document.querySelector('#petpic');
      petPic.src = doc.data().picture;

    })

    const email = document.querySelector('#email');
    email.textContent = user.email;
  }
});





// logout
const logout = document.querySelector('#logoutBtn');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
});
