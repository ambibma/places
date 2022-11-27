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
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.climate = climate;
}

// UI logic