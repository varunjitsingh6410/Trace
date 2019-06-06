/*
* this file navigate the pet on the profile page to go to that pet's INFORMATION
* page. 
*/

const petData = document.querySelector('#pet');

const petUpdate = document.querySelector('#updates');

// create element and render pet list
function renderNamePet(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');

  let description1 = document.createElement('span');

  let dateLabel = document.createElement('span');
  let date = document.createElement('span');

  let locationLabel = document.createElement('span');
  let location = document.createElement('span');

  let description2 = document.createElement('span');

  let breedLabel = document.createElement('span');
  let breed = document.createElement('span');

  let descLabel = document.createElement('span');
  let desc = document.createElement('span');

  let rewardLabel = document.createElement('span');
  let reward = document.createElement('span');

  let contactLabel = document.createElement('span');
  let contact = document.createElement('span');
  let contact2 = document.createElement('span');

  let description3 = document.createElement('span');

  var img = document.createElement("img");



  li.setAttribute('data-id', doc.id);

  description1.textContent = "Last seen";

  name.textContent = doc.data().name.toUpperCase();


  dateLabel.textContent = "DATE";
  date.textContent = doc.data().date;

  locationLabel.textContent = "LOCATION";
  location.textContent = doc.data().location;

  description2.textContent = "Description";

  breedLabel.textContent = "BREED";
  breed.textContent = doc.data().breed;

  descLabel.textContent = "PHYSICAL TRAITS & BEHAVIOR";
  desc.textContent = doc.data().description;

  rewardLabel.textContent = "REWARD";
  reward.textContent = doc.data().reward;

  contactLabel.textContent = "CONTACT INFORMATION";
  contact.textContent = doc.data().phone;
  contact2.textContent = doc.data().email;

  description3.textContent = "Updates";


  img.src = doc.data().picture;

  li.appendChild(img);


  li.appendChild(name);
  li.appendChild(description1);

  li.appendChild(dateLabel);
  li.appendChild(date);

  li.appendChild(locationLabel);
  li.appendChild(location);

  li.appendChild(description2);

  li.appendChild(breedLabel);
  li.appendChild(breed);

  li.appendChild(descLabel);
  li.appendChild(desc);

  li.appendChild(rewardLabel);
  li.appendChild(reward);

  li.appendChild(contactLabel);
  li.appendChild(contact);
  li.appendChild(contact2);

  li.appendChild(description3);





  petData.appendChild(li);
}

function renderUpdate(doc) {
  let li = document.createElement('li');
  let date = document.createElement('span');
  let update = document.createElement('span');
  date.textContent = doc.data().alertdate;
  update.textContent = doc.data().alert;
  li.appendChild(date);
  li.appendChild(update);
  petUpdate.appendChild(li);
}

// Initialize and add the map
function initMap(doc) {
 const lat = doc.data().lat;
 const lng = doc.data().long;
 const position = new google.maps.LatLng(lat, lng);
 // var pet = {lat: doc.data().lat, lng: doc.data().long};
 // The map, centered at Uluru
 var map = new google.maps.Map(
		 document.getElementById('map'), {zoom: 13, center: position});
 // The marker, positioned at Uluru
 var marker = new google.maps.Marker({position: position, map: map});
}

// add update

const addUpdate = document.querySelector('#addupdate-form');


db.collection('pets').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      // adjust later for different pets :-)
      let name = doc.data().name;
      var userUid = auth.currentUser.uid;

      db.collection('users').doc(userUid).get().then(doc2 => {
        // imgID
        if (name == doc2.data().pet) {
            console.log(doc.id);

            renderNamePet(doc);
            renderUpdate(doc);
            initMap(doc);


            addUpdate.addEventListener('submit', (e) => {
              e.preventDefault();

              const date = addUpdate['date'].value;
              const description = addUpdate['desc'].value;

              var pet = db.collection("pets").doc(doc.id);

              return pet.update({
                alertdate:date,
                alert: description
            /*
                alerts: [
                  { alertdate:date },
                  { alert: description }
                ]
            */
              })
              .then(function() {
                  console.log("Document successfully updated!");
                  window.location.href = 'pet2.html';
              })
              .catch(function(error) {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
              });

            })

            return;
        }
      })


  })
})
