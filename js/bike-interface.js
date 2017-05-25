var Bike = require('./../js/bike.js').bikeModule;

// var displayLocations = function(locationData) {
//   console.log(locationData)
//   // $('.showLocation').text('Stolen bikes: ' + locationData);
// }

$(document).ready(function() {
  $('#location').click(function() {
    var currentBikeObject = new Bike();
    var city = $('#city').val();
    currentBikeObject.getLocation(city);
  });
});
