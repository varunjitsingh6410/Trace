const addUpdate = document.querySelector('#addupdate-form');

addUpdate.addEventListener('submit', (e) => {
  e.preventDefault();

  const date = addUpdate['date'].value;
  const description = addUpdate['desc'].value;

  var pet = db.collection("petTest").doc("m5OOeiCT2wRBSWgZhvVg");

  return pet.update({
    alertdate: date,
    alert: description
  })
  .then(function() {
      console.log("Document successfully updated!");
      window.location.href = 'pet.html';
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });

})
