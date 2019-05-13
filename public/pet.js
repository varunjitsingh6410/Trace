const petData = document.querySelector('#pet-list');

// create element and render pet list
function renderName(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');

  let dateLabel = document.createElement('span');
  let date = document.createElement('span');

  let locationLabel = document.createElement('span');
  let location = document.createElement('span');

  let rewardLabel = document.createElement('span');
  let reward = document.createElement('span');

  var img = document.createElement("img");



  li.setAttribute('data-id', doc.id);

  name.textContent = doc.data().name.toUpperCase();

  dateLabel.textContent = "DATE";
  date.textContent = doc.data().date;

  locationLabel.textContent = "LOCATION";
  location.textContent = doc.data().location;

  rewardLabel.textContent = "REWARD";
  reward.textContent = doc.data().reward;
  img.src = doc.data().picture;


  li.appendChild(name);

  li.appendChild(dateLabel);
  li.appendChild(date);

  li.appendChild(locationLabel);
  li.appendChild(location);

  li.appendChild(rewardLabel);
  li.appendChild(reward);

  li.appendChild(img);



  petData.appendChild(li);



}

db.collection('petTest').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderName(doc);
  })
});

db.collection('pets').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderName(doc);
  })
});
