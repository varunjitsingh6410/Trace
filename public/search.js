/*
* this file will search through the database when the enter key is pressed
* on the search bar of list page. 
*/

$('document').ready(function(){
  $('#searchbutton').click(() => {
    $('ul').empty();
    const petData = document.querySelector('#pet-list');

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
    db.collection('pets').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let name = doc.data().name;
        let location = doc.data().location;
        let status = doc.data().status;
        let search = $('#searchBox').val();
        name = name.toUpperCase();
        search = search.toUpperCase();
        if (name == search) {
          renderName(doc);
        }
        else if (name && (search== "")){
          renderName(doc);
        }
      })
    });
  })
  $('#searchBox').keypress(function(e){
       if(e.which == 13){//Enter key pressed
           $('#searchbutton').click();//Trigger search button click event
       }
   });
});
