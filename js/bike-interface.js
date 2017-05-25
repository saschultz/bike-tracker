var Bike = require('./../js/bike.js').bikeModule;

var displayLocations = function(response) {
  response.bikes.forEach(function(bike) {
    $('.showLocation').append('<li>' + 'Location: ' + bike.stolen_location + ' Manufacturer: ' + bike.manufacturer_name + '</li>');
  });
}

$(document).ready(function() {
  $('#location').click(function() {
    var currentBikeObject = new Bike();
    var city = $('#city').val();
    currentBikeObject.getLocation(city, displayLocations);
  });
});
