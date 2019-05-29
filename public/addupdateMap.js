const addUpdate = document.querySelector('#addupdate-form');
let queryString3 = decodeURIComponent(window.location.search);
queryString3 = queryString3.substring(7);
addUpdate.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = addUpdate['date'].value;
  const description = addUpdate['desc'].value;

  var pet = db.collection("petTest").doc(queryString3);
  pet.get();
  if (pet.exists){
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
      window.location.href = 'pet.html?para1='+queryString3;
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });}
  else {
    var petF = db.collection("pets").doc(queryString3);
    return petF.update({
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
        window.location.href = 'pet.html?para1='+queryString3;
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

})
