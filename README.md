Step 1
- make a containing object that contains places ✓
-how do we add a place? ✓
  -what is in those places?✓😯
    -location
    -restaurants/landmarks
    -accommodations
- how do we add a place into our travelogue ✓
  -adding destination into travelogue ✓


TDD
----

Describe: function Travelogue();
Test: It should create an object for Travelogue
Code: Travelogue();
Expected Output: {} . ✓

Describe: function location(city, landmarks, restaurant, climate)
Test: It is a constructor that will create an object
Code: Location(Los Angeles, Hollywood sign, Crony's, Sunny)
Expected Output: Los-Angeles {city: Los-Angeles, landmarks: Hollywood sign, restaurant: Crony's, climate: sunny} ✓

Describe: Travelogue.prototype.addLocation()
Test: It will add a location to the travelogue
Code: Travelogue.addLocation(Los Angeles);
Expected Output: Travelogue {Location: Los Angeles, landmarks: Hollywood sign, restaurant: Crony's, climate: sunny} ✓




Travel Journal
|_Destination
||_Location
|