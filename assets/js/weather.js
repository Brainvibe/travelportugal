//weather for Lisbon

//loading api 
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-open-weather-map.p.rapidapi.com/weather?id=2267057&units=metric",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "4c396de91amsh9223e6fb0da20f5p11b1a9jsne7affd5ec411"
	}
}

// load image and temp text to weather container

$.ajax(settings).done(function (response) {
    
    let icon = "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    let temp = Math.floor(response.main.temp);
    let weather = response.weather[0].main;

    $('.icon').attr('src', icon);
    $('.temp').append(temp + "º");
 
});