var Bike = require('./../js/bike.js').bikeModule;

var displayLocations = function(city, locationData) {
  $('.showLocation').text('Stolen bikes: ' + city + locationData);
}

$(document).ready(function() {
  $('#location').click(function() {
    var currentBikeObject = new Bike();
    var city = $('#city').val();
    currentBikeObject.getLocation(city, displayLocations);
  });
});
