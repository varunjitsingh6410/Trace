/*
* This file contains function that will take the information entered in the
* form in add page and add the pet to the firestore database in the pets collection.
* It will also add the pet under the user.
*/

const form = document.querySelector("#addpet-form");

//saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var userUid = auth.currentUser.uid;
  db.collection('pets').add({
    name: form.petName.value,
    picture: form.petPic.value,
    breed: form.petBreed.value,
    location: form.locationLastSeen.value,
    date: form.dateLastSeen.value,
    description: form.petDescription.value,
    reward: form.petReward.value,
    email: form.ownerEmail.value,
    phone: form.ownerNumber.value,
    lat: form.mapLocation.value,
    long: form.mapLocation2.value,
    status: "LOST"

  });


  db.collection('users').doc(userUid).update({
        pet: form.petName.value,
        picture: form.petPic.value
  });

  form.reset();
  alert("Pet successfully added.");


});
/*
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('users').doc(user.uid).add({
      pet: form.petName.value
    })

  }
});
*/
