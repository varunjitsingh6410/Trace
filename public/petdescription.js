const petData = document.querySelector('#pet');

// create element and render pet list
function renderName(doc) {
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

db.collection('petTest').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      // adjust later for different pets :-)
      let name = doc.data().name;
      if (name == "George") {
          renderName(doc);
      }
  })
})
