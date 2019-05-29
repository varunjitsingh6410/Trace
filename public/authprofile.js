/*//get data
db.collection('pets').get().then(snapshot => {
  console.log(snapshot.docs)
});*/

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
