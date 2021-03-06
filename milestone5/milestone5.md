Team Name: Ferrets

Application Name: Trace

Names:
Thao Nguyen,
Varun Jit Singh,
Sasri Dedigama,
Yumi Minami

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



## How To Use
New users will start off on Trace by using the sign up button to create an account with their name, email and password. Upon clicking on sign up button they will be directed to the maps page. The tab bar on the bottom contains links to the main pages: Map, List, Add Pet, Notifications, and Profile.

On the map page they can see the locations where the pets were seen. Hovering over the marker will give them a infow window preview with the pet's name and clicking on the marker can direct them to the page corresponding to that pet.

They can see a list of the missing pets on the list view. The list page contains a more in depth preview of the pet's information then the maps page info windows do by showing the pet picture, date, location, and reward.

The add pets page lets users add a pet to the database. They will be able to enter in the pet's name, photo, breed, last seen location, date, description, reward, and contact information.

The notication page simply shows alerts and the profile page shows the user's information.

## UI Improvements
On the map page, we made improvements on the map markers. In addition, we added a feature
that pop ups the name of the specific pet when the mouse is hovered over/ click and hold depending on the device. Once the owl icon is fully clicked it takes you to a page that shows more information on the specific pet.

On the list page, we made improvements on being able to click on the pet image in order
to get more information on the specific pet.

On the pet description page, we added a small map if the geolocation of the pet is
available. In addition users are able to edit the pet's update by clicking on the add
update page.

On the add page, we added the option of pinning a pin nearby the current location
in order to save the geolocation of the pet.

On the profile page, users can see their most recently added pet below my posts.
Users can click to see the specific pet's page.

## Data Visualization
We visualized the date primarily on the maps page. The markers that were clustered in various parts of the map were pulled from our database on Firestore. Clicking on the marker icon will transfer the data corresponding to the pet. The List also has the pet data posted and clicking on it will lead to a similar "pet details" page like the map markers do. Hovering over/click-holding on the markers shows a small snippet of the data (pet name) so users can see the name of the pet before going to the pets detail page. Data can also be added via the add pets page where upon entering all of the pet's information the user can press upload to push the data to firestore and the map/list views will update accordingly.

## Potential Improvements
One potential improvement we would like to implement is the search feature on the map view. So that when you enter a pet name on the map it will move the map to that pet's location. Another improvement would be to make the notifications page update when an update is made to the status of a pet the user posted.

## Data Pictures
#### Add
![](data1.png)
#### List
![](data2.png)
#### Map
![](data3.png)
#### description
![](data4.png)

After adding pet, the list, map, and description pulls from firestore the newly
added info.

## How we implemented
We implemented front end UI/UX features using HTML, CSS, and JavaScript. The back end was implemented using Firebase's Firestore database. Firestore was implemented to store all of the data of the users and pets. We also used the Google Maps API to display the map with the markers on the maps page. The API was also used in the add pets page to set the pet's location.
