Bike = function() {
}

Bike.prototype.getLocation = function(city, displayLocations) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=' + city +  '&distance=10&stolenness=proximity')
    .then(function(response) {
      displayLocations(response)
    }).fail(function(error) {
    $('.showLocation').text(error.responseJSON.message);
  });
};


exports.bikeModule = Bike;
