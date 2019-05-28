const form = document.querySelector("#addpet-form");

//saving data
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('petTest').add({
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
  })
  form.reset();
  alert("Pet successfully added.");


})
