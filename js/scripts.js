// Travelogue Business Logic
function Travelogue() {
  this.locations = {};
}

// Location Business Logic
function Location(city, landmarks, restaurants, climate) {
  this.city = city;
  this.landmarks = landmarks;
  this.restaurants = restaurants;
  this.climate = climate;
}

// UI logic