// Travelogue Business Logic
function Travelogue() {
  this.locations = {};
}

Travelogue.prototype.addLocation = function(location) {
  this.location = location;
}

// Location Business Logic
function Location(city, landmarks, restaurants, climate) {
  this.city = city;
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.climate = climate;
}

// UI logic