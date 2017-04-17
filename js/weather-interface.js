var apiKey = "e5f7039e049621f0bdb0632c7342ecbb";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + " %");
    });
    .fail(function(error) {
      $('.showWeather').text(error.response.JSON.message);
    });
  });
});
