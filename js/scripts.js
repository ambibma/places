// Travelogue Business Logic
function Travelogue() {
  this.locations = {};
  this.currentId = 0;
}

Travelogue.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Travelogue.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
}

Travelogue.prototype.deleteLocation = function(id) {
  if (this.locations[id] === undefined) {
    return false;
  }
  delete this.locations[id];
  return true;
}

// Location Business Logic
function Location(city, landmarks, restaurants, climate) {
  this.city = city;
  this.restaurants = restaurants;
  this.landmarks = landmarks;
  this.climate = climate;
}

// UI logic
let travelogue = new Travelogue();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedCity = document.querySelector("input#new-city").value
  const inputtedRestaurants = document.querySelector("input#new-restaurants").value;
  const inputtedLandmarks = document.querySelector("input#new-landmarks").value;
  const inputtedClimate = document.querySelector("input#new-climate").value;
  let newLocation = new Location(inputtedCity, inputtedRestaurants, inputtedLandmarks, inputtedClimate);
  travelogue.addLocation(newLocation);
  console.log(travelogue.locations);

}
  window.addEventListener("load", function (){
    document.querySelector("form#new-location").addEventListener("submit", handleFormSubmission);
  });

