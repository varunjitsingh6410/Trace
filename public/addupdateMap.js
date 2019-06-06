/*
* This file contains a function that will take in the update entered
* from the form on addupdateMap.html and add the alert to the pet's collection.
*
*/

const addUpdate = document.querySelector('#addupdate-form');
let queryString3 = decodeURIComponent(window.location.search);
queryString3 = queryString3.substring(7);
//back button
$('#back').click(function(){
  window.location = "petMap.html?para1="+ queryString3;
});

addUpdate.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = addUpdate['date'].value;
  const description = addUpdate['desc'].value;

  var pet = db.collection("pets").doc(queryString3);
  pet.get();
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
      window.location.href = 'petMap.html?para1='+queryString3;
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

})
