/*
* This file will populate the list page with all the pets from the database in firestore
* and will also search through the list whenever the user enters any key in the
* search bar.
*/
const petData = document.querySelector('#pet-list');
let arr = [];
let petMap = new Map();
let resultPet = new Map();
// create element and render pet list
function renderName(doc) {
if (doc.exists) {
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

  link.setAttribute('id', doc.id);
  link.setAttribute('class', 'set');
  link.setAttribute('href', "pet.html?para1="+ doc.id);

  name.textContent = doc.data().name.toUpperCase();
  petMap.set(doc.data().name, doc.id);
  arr.push(doc.data().name);

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
}
db.collection('pets').onSnapshot((snapshot) => {
  snapshot.docs.forEach(doc => {
      let name = doc.data().name;
      let location = doc.data().location;
      let status = doc.data().status;
      if (name && (status=="LOST")) {
        renderName(doc);
      }
  })
});


function updateResult(query) {
    let resultList = document.querySelector('#pet-list');
    $('ul').empty();
    resultList.innerHTML == "";
    resultPet.clear();
    arr.map(function(algo){
        query.split(" ").map(function (word){
            if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
              if(!(resultPet.has(algo))){
              resultPet.set(algo, "");
              petID = petMap.get(algo);
              let docRef = db.collection("pets").doc(petID);
              docRef.get().then(function(doc) {
                renderName(doc);
              })
            }
          }
        })
    })
}
