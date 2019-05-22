/*//get data
db.collection('pets').get().then(snapshot => {
  console.log(snapshot.docs)
});*/

auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user);
    const name = document.querySelector('#name');
    name.textContent = user.displayName;
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
