Team Name: Ferrets

Application Name: Trace

Names:
#### Yumi Minami
Full Stack Developer
Implemented the search and list page functionality using JavaScript. Used the dataset api and imported it into Firestore. Styled and created pages for app using HTML and CSS. Created Mid – Fi prototypes using Figma.
#### Thao Nguyen
Full Stack Developer
Worked on the add pet, pet info, account page and updates. Assisted in the integration of the Firestore database and its functionality in the app. Styled and created pages for app using HTML and CSS. Created graphics used in the app using Adobe Illustrator.
#### Varun Jit Singh
Full Stack Developer
Implemented the login, signup pages initially using Ajax at first and then converted to Firestore. Assisted in the implementation of the google maps api in the maps page. Made sure deliverables were done on time and done right.
#### Sasri Dedigama
Full Stack Developer
Implemented the map page with firebase real time database and then converted to firebase fire store database. Integrated the google maps api into the map. Created marker icon using Photoshop.

## Video Demo Link
https://drive.google.com/open?id=1QmcfRJ0IcJ-4Sf8JghSYVEmlpCBRHhHl

## UI Skeleton Webpages

#### Login Page
![](1.PNG)
#### Forgot Password
![](2.PNG)
#### Make Account
![](3.PNG)
#### Map View
![](4.PNG)
#### List View
![](5.PNG)
#### Add
![](6.PNG)
![](65.PNG)
#### Alerts
![](7.PNG)
#### Account
![](8.PNG)
#### Edit Account
![](9.PNG)
#### Pet Info
![](10.PNG)
![](11.PNG)
#### Add update
![](12.PNG)

## File Descriptions

#### Account Login
index.html
The index page is the login page for users. Users have the option to
log into the app as well as forgot password and sign up options.

authlogin.js
This file will go to the trace database using firebase authentification
and will log in the user when the email and password is correct.

resetpwd.html
This page allows you to reset your password through the email. The
formatting is complete, but the email to send the password reset is
not sent.

register.html
This page registers user's into Trace's database on Firebase.
With this account information users can log into the app.

auth.js
this file will create new user to the trace database using firebase authentification
from information inputed in the register page.  

forgotpass.html
The forgot password page allows users to recieve an email in order to
be able to reset their password.

#### Map page
map.html
This file implements the map feature using the google maps api. The map
is marked with various pins representing pets. The pins can be clicked on
which redirects to the petMap.html page.

addupdateMap.html
The add update page (map) allows users to add the most recent update of
date and location to that specific pets page and the update also shows
up on the notification page.

addupdateMap.js
This file contains a function that will take in the update entered
from the form on addupdateMap.html and add the alert to the pet's collection.

descriptionMap.js
This file contains a function that will populate the pet page
when the user clicks on a pet from the map. It will take the doc id
sent with the url to find the pet.

petMap.html
Pet.html can be accessed by clicking on the corresponding pet pin or picture
from the map.html, list.html, or notification.html pages respectively. The
information on these pages is more in depth on each pet and allows updates to be
made regarding the pet's status.

#### List page
list.html
This file shows all the pets in a list format. The user can search for a
specific pet using the search bar or click on a pet's image which would lead
them to pet.html page.

pet.html
Pet.html can be accessed by clicking on the corresponding pet pin or picture
from the map.html, list.html, or notification.html pages respectively. The
information on these pages is more in depth on each pet and allows updates to be
made regarding the pet's status

petdescription.js
This file contains a function that will populate the pet page
when the user clicks on a pet from the list. It will take the doc id
sent with the url to find the pet.

search.js
This file will search through the database when the enter key is pressed
on the search bar of list page.

pet.js
This file will populate the list page with all the pets from the database in firestore and will also search through the list whenever the user enters any key in the search bar.

#### Add pet page
addLostPet.html
This page lets the user add a missing pet to the database. Users can enter
in relevant information such as the pet's name, location description, and their exact missing location on a map, description, and reward along with the owners contact information. The information then gets inputted into Firebase storage so
it shows up on the map and list page.

add.js
This file contains function that will take the information entered in the
form in add page and add the pet to the firestore database in the pets collection.
It will also add the pet under the user.

addupdate.html
The add update page (list) allows users to add the most recent update of
date and location to that specific pets page and the update also shows
up on the notification page.

addupdate.js
This file contains a function that will take in the update entered
from the form on addupdate.html and add the alert to the pet's collection.

#### Notification page
notification.html
This page shows the user notifications on various pets with their
respective updates being shown in the preview. Clicking on a pet's image
leads to their pet.html page.

petalert.js
This file will find pets with new updates and show it on the notification page.

#### Profile page
profile.html
This page showcases the profile page of the current user logged in.
This page includes options ot adjust account settings as well as be able
to see the most recent pet they added for quick and easy navigation.

editinfo.html
The edit info page allows users to edit their account information
including email and password

autheditinfo.js
this file will edit account information ( email and password) from the profile page.
All changes will be updated to the trace database.

authprofile.js
This file will pull up the account information from the trace database and
will populate the information on the account page, including email, name, and
the pet that was added to the database through the account.

profilepet.html
This page can be accessed by clicking on the see alerts button on the
user's profile. The information on this page goes more into depth on the
pet and allows updates to be made regarding the pet's status.

profilepetDescription.js
This file navigate the pet on the profile page to go to that pet's INFORMATION
page.

api.js
This file contains the pet information in the form of JSON file from the
API: https://data.kingcounty.gov/Licenses-Permits-and-Records/Lost-found-adoptable-pets/yaai-7frk?fbclid=IwAR0OGbnND4YFaO712OJT-7G5AdMzjZbIUXuZIXsCxKRYozRmJiy0hNtyHvg
The file then contains a function that takes all of the data and push it
up to the firebase firestore under the collection name 'pets'

app.js
This file contains a function that will set up a local server using
node.js and express.

## Google Slides Link
https://docs.google.com/presentation/d/1wE9Se7SFTxBgmThDBZHwwmYO3oUhZeDmtHIxu8I4VKQ/edit#slide=id.g5af68617b6_6_0

## Google Slides Picture
![](finalSlide.png)
