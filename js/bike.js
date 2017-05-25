// var apiKey = require('./../.env').apiKey;

Bike = function() {
}

Bike.prototype.getLocation = function(city, displayLocations) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location='+ city)
  .then(function(response) {
    displayLocations(city, response.bikes.stolen_location);
  })
  .fail(function(error) {
    $('.showLocation').text(error.responseJSON.message);
  });
}

exports.bikeModule = Bike;
