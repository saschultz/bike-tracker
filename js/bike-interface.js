var Bike = require('./../js/bike.js').bikeModule;

var displayLocations = function(response) {
  response.bikes.forEach(function(bike) {
    $('.showLocation').append(`<li>Location: ${bike.stolen_location}</li><li>Manufacturer:  ${bike.manufacturer_name}</li><li>Model: ${bike.frame_model}</li><li><img src="${bike.thumb}"/></li><br>`);
  });
};

$(document).ready(function() {
  $('#location').click(function() {
    var currentBikeObject = new Bike();
    var city = $('#city').val();
    currentBikeObject.getLocation(city, displayLocations);
  });
});
