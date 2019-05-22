const petData = document.querySelector('#pet-list');

// create element and render pet list
function renderName(doc) {
  let li = document.createElement('li');
  let link = document.createElement('a');
  let name = document.createElement('span');

  let dateLabel = document.createElement('span');
  let date = document.createElement('span');

  let locationLabel = document.createElement('span');
  let location = document.createElement('span');

  let rewardLabel = document.createElement('span');
  let reward = document.createElement('span');

  var img = document.createElement("img");



  li.setAttribute('data-id', doc.id);

  link.setAttribute('class', 'petPage');
  link.setAttribute('id', doc.data().picture);
  link.setAttribute('href', 'pet.html');

  name.textContent = doc.data().name.toUpperCase();

  dateLabel.textContent = "DATE";
  date.textContent = doc.data().date;

  locationLabel.textContent = "LOCATION";
  location.textContent = doc.data().location;

  rewardLabel.textContent = "REWARD";
  reward.textContent = doc.data().reward;
  img.src = doc.data().picture;

  link.appendChild(img);

  li.appendChild(name);

  li.appendChild(dateLabel);
  li.appendChild(date);

  li.appendChild(locationLabel);
  li.appendChild(location);

  li.appendChild(rewardLabel);
  li.appendChild(reward);

  li.appendChild(link);



  petData.appendChild(li);
}

db.collection('petTest').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderName(doc);
  })
});
db.collection('pets').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      let name = doc.data().name;
      let location = doc.data().location;
      let status = doc.data().status;
      if (name && (status == "LOST")) {
        renderName(doc);
      }
  })
});

$('document').ready(function(){
  $('.petPage').click(() => {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "pInfo.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(this.id);
  })
});
