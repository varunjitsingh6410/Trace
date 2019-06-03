/*
* this file will find pets with new updates and show it on
* the notification page.
*/

const petData = document.querySelector('#pet-alerts');
let arr = [];
let petMap = new Map();
let resultPet = new Map();
// create element and render pet list
function renderName(doc) {
if (doc.exists) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    let name = document.createElement('span');

    let date = document.createElement('span');

    let alert = document.createElement('span');

    var img = document.createElement("img");


    li.setAttribute('data-id', doc.id);

    link.setAttribute('id', doc.id);
    link.setAttribute('class', 'set');
    link.setAttribute('href', "pet.html?para1="+ doc.id);

    name.textContent = doc.data().name.toUpperCase();
    petMap.set(doc.data().name, doc.id);
    arr.push(doc.data().name);

    date.textContent = doc.data().alertdate;

    alert.textContent = doc.data().alert;

    img.src = doc.data().picture;

    link.appendChild(img);

    li.appendChild(name);

    li.appendChild(date);

    li.appendChild(alert);

    li.appendChild(link);



    petData.appendChild(li);
  }
}

/*db.collection('petTest').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      renderName(doc);
  })
});*/
db.collection('pets').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      let name = doc.data().name;
      let location = doc.data().location;
      let status = doc.data().status;
      let alert = doc.data().alert;
      if (name && alert && (status == "LOST")) {
        renderName(doc);
      }
  })
});

function updateResult(query) {
    let resultList = document.querySelector('#pet-alerts');
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
              //let docRef2 = db.collection("petTest").doc(petID);
              docRef.get().then(function(doc) {
                renderName(doc);
              })
              /*docRef2.get().then(function(docs) {
                renderName(docs);
              })*/
            }
          }
        })
    })
}
