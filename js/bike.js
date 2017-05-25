Bike = function() {
}

Bike.prototype.getLocation = function(city) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city + '&distance=10&stolenness=proximity')
    .then(function(response) {
      response.bikes.forEach(function(bike) {
        console.log(response.bikes[0].stolen_location);
        $('.showLocation').text('Stolen bikes: ' + bike.stolen_location);
      // displayLocations(response.bikes.stolen_location);
      })
    }).fail(function(error) {
    $('.showLocation').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
